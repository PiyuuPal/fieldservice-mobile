import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import axios from "axios";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ImagePicker from "react-native-image-crop-picker";
import { styles } from "./InvoiceAttachmentsStyles";
import { backgroundImage, cancel } from "@/assets";
import RNFetchBlob from "rn-fetch-blob";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ActionSheet from "react-native-actionsheet";
import { uploadimage } from "@/actions/UserActions";
export const InvoiceAttachments = () => {
  const navigation = useNavigation();
  let actionSheet = useRef();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const invoiceid = useSelector(
    (state) => state.user.invoiceDetails?.invoiceDetails?.id
  );
  const invoiceAttachment = useSelector(
    (state) => state?.user?.invoiceDetails?.invoiceAttachment
  );
  const showActionSheet = () => {
    actionSheet.current.show();
  };
  //console.log(invoiceAttachment);
  useEffect(() => {
    const grandparentNavigation = navigation.getParent("rootNavigator");

    if (grandparentNavigation) {
      const screenOptions = {
        tabBarStyle: { display: "none" },
      };
      try {
        grandparentNavigation.setOptions(screenOptions);
      } catch (error) {
        console.log("Error occurred while setting options:", error);
      }
    } else {
      console.log("grandparentNavigation is null or undefined");
    }

    return () => {
      if (grandparentNavigation) {
        const screenOptions = {
          tabBarStyle: { backgroundColor: "#FCFDFF", height: 80 },
        };
        try {
          grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
          console.log("Error occurred while setting options:", error);
        }
      }
    };
  }, []);
  const submit = async (path) => {
    console.log(path);
    const accessToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJJc3N1ZXIgb2YgdGhlIEpXVCIsImF1ZCI6IkF1ZGllbmNlIHRoYXQgdGhlIEpXVCIsInN1YiI6IlN1YmplY3Qgb2YgdGhlIEpXVCIsIm5iZiI6MTY4ODc5Mjc2MSwiaWF0IjoxNjg4NzkyNzUxLCJleHAiOjE2ODg4NzkxNTEsImRhdGEiOnsiaWQiOiIyOTUiLCJmaXJzdF9uYW1lIjoiUmF2aSIsImxhc3RfbmFtZSI6IlJhaiIsImVtYWlsIjoicmF2aUB5b3BtYWlsLmNvbSIsInBob25lIjoiMTg3NTI3NjI3NSIsInJvbGUiOiIyIiwidXNlcl90eXBlIjoiMCIsImJ1c2luZXNzX2lkIjoiMjEwIn19.067gaNQtN4BfCD7uo6Trsi2HYekjbCFru42q1vMDMyQ';
    
    

   
    const formData = new FormData();

// Append the image file to the FormData object
formData.append('file', {
  invoice_file: path,
 
});

try {
  // Make a POST request to the specified URL with the FormData object
  const response = await axios.post('https://observancedev.com/api/invoice/attachmentUpload', formData, {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
       // Add this header to specify the content type
       'Content-Type': 'multipart/form-data',
    },
  });

  // Handle the response from the backend
  console.log(response);
} catch (err) {
  if (err) {
    // Handle cancelled file picking
    console.log(err);
  } else {
    // Handle other errors
    console.log('Error:', err);
  }
}
}
  
        
  
  function imageuploadData(index) {
    if (index == 0) {
      ImagePicker.openPicker({
        width: 100,
        height: 100,
        cropping: false,
      }).then((image) => {
        setSelectedImage(image.path);
        //console.log(image.path);
        submit(image.path);
      });
    } else {
      ImagePicker.openCamera({
        width: 100,
        height: 100,
        cropping: false,
      }).then((image) => {
        setSelectedImage(image.path);
        // console.log(image.path);
        submit(image.path);
      });
    }
  }
  const renderItem = ({ item }) => {
    //   console.log(item);
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{ uri: item.file_name }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", padding: 20 }}>
              <TouchableOpacity
                style={styles.custIcon}
                onPress={() => navigation.goBack()}
              >
                <Image source={cancel} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Attachments</Text>
            </View>
          </View>
        </ImageBackground>

        <View>
          <FlatList
            data={invoiceAttachment}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.flatlist}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity style={styles.addimage} onPress={showActionSheet}>
          <MaterialIcons name="add-a-photo" size={50} />
        </TouchableOpacity>
      </View>
      <View></View>
      <ActionSheet
        ref={actionSheet}
        title={"Which one do you like ?"}
        options={["Gallery", "Camera", "Cancel"]}
        cancelButtonIndex={2}
        destructiveButtonIndex={2}
        onPress={(index) => {
          imageuploadData(index);
        }}
      />
    </SafeAreaView>
  );
};
