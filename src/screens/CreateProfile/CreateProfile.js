import React, { useState,useRef } from "react";
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Button, ImageBackground, Image } from "react-native";
import { styles } from "@/screens/CreateProfile/CreateProfileStyles";
import { TextInput } from "react-native-gesture-handler";
import ActionSheet from 'react-native-actionsheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import Entypo from "react-native-vector-icons/Entypo";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NAVIGATION } from "@/constants";
import { useNavigation } from "@react-navigation/native";

export function CreateProfile() {
  let actionSheet = useRef();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const showActionSheet = () => {
    actionSheet.current.show();
  };
  
  function imageuploadData(index) {
    
    if (index == 0) {
      ImagePicker.openPicker({
        width: 100,
        height: 100,
        cropping: false,
      }).then((image) => {
        
        setSelectedImage(image.path);
        ShowToastMessage("Image upload successfully.")
      });
    } else {
      ImagePicker.openCamera({
        width: 100,
        height: 100,
        cropping: false,
      }).then((image) => {
        
        setSelectedImage(image.path);
        ShowToastMessage("Image upload successfully.")
      });
    }
  }

  const validationSchema = Yup.object({
    firstName: Yup.string()
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z ]*$/, 'First name should not contain numbers and should have at least one non-space character')
      .required('First name is required'),
    lastName: Yup.string()
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z ]*$/, 'First name should not contain numbers and should have at least one non-space character')
      .required('Last name is required'),
      businessName: Yup.string()
  .required('Business name is required')
  .min(5, 'Business name must have at least 5 characters'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number should have 10 digits')
      .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      businessName: '',
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: values => {
      
      if (formik.isValid) {
        navigation.navigate(NAVIGATION.BusinessSelection);
      }
    },
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('@/assets/CreateProfile/signupbackground.png')}
          style={styles.backgroundImage}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image source={require('../../assets/imageslog/Vector.png')} style={styles.iconrightChevron} />
                                </TouchableOpacity>
            <View style={styles.ScrollView}>
              <Text style={styles.heading}>
                Tell Us Who You Are!
              </Text>
              <Text style={styles.smallheading}>
                Create Your Free Account Now
              </Text>
              <View style={[styles.uploadimagecontainer]}>
                <TouchableOpacity style={[styles.uploadimagebutton, styles.boxShadow]} onPress={showActionSheet}>
                  <Image
                    source={require('@/assets/CreateProfile/usericon.png')}
                  ></Image>
                </TouchableOpacity>
              </View>
              <Text style={styles.uploadimagelabel}>Upload Your Profile Picture</Text>

              <Text style={styles.label}>First Name</Text>
              <View style={styles.inputContainer}>
                <FontAwesome name="user-o" size={20} style={styles.inputicon} />
                <TextInput
                  style={styles.input}
                  placeholder={"First name"}
                  placeholderTextColor="#888"
                  onChangeText={formik.handleChange('firstName')}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur('firstName')}
                />
              </View>
              {formik.touched.firstName && formik.errors.firstName ? (
                <Text style={styles.errorText}>{formik.errors.firstName}</Text>
              ) : null}

              <Text style={styles.label}>Last Name</Text>
              <View style={styles.inputContainer}>
                <FontAwesome name="user-o" size={20} style={styles.inputicon} />
                <TextInput
                  style={styles.input}
                  placeholder={"Last name"}
                  placeholderTextColor="#888"
                  onChangeText={formik.handleChange('lastName')}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur('lastName')}
                />
              </View>
              {formik.touched.lastName && formik.errors.lastName ? (
                <Text style={styles.errorText}>{formik.errors.lastName}</Text>
              ) : null}

              <Text style={styles.label}>Business Name</Text>
              <View style={styles.inputContainer}>
                <FontAwesome name="building" size={20} style={styles.inputicon} />
                <TextInput
                  style={styles.input}
                  placeholder={"Business Name"}
                  placeholderTextColor="#888"
                  onChangeText={formik.handleChange('businessName')}
                  value={formik.values.businessName}
                  onBlur={formik.handleBlur('businessName')}
                />
              </View>
              {formik.touched.businessName && formik.errors.businessName ? (
                <Text style={styles.errorText}>{formik.errors.businessName}</Text>
              ) : null}

              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.inputContainer}>
                <FontAwesome name="phone" size={20} style={styles.inputicon} />
                <TextInput
                  style={styles.input}
                  placeholder={"Phone Number"}
                  placeholderTextColor="#888"
                  keyboardType="phone-pad"
                  onChangeText={formik.handleChange('phoneNumber')}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur('phoneNumber')}
                  maxLength={10}
                />
              </View>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <Text style={styles.errorText}>{formik.errors.phoneNumber}</Text>
              ) : null}

              <TouchableOpacity style={styles.logInbutton} onPress={()=>navigation.navigate(NAVIGATION.BusinessSelection)}>
                <View style={styles.logInbuttonView}>
                  <Entypo name="arrow-right" size={20} style={styles.logInbuttonIcon} />
                </View>
                <Text style={[styles.txtFieldTitle, { fontSize: 16 }]}>Next</Text>
              </TouchableOpacity>

              <ActionSheet
                ref={actionSheet}
                title={'Which one do you like ?'}
                options={['Gallery', 'Camera', 'Cancel']}
                cancelButtonIndex={2}
                destructiveButtonIndex={2}
                onPress={(index) => {
                  imageuploadData(index);
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}
