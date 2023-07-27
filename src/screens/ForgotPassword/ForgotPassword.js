import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import { style } from "../SignIn/SignIn.styles";
import Entypo from 'react-native-vector-icons/Entypo';
import { spacing } from "@/theme";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { forgotPass } from "@/actions/UserActions";




const ForgotPassword = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const forgotPassApi = (values) => {
        let data = {
            email: values.email,
        };
        
        dispatch(forgotPass(data, navigation));
    };


    const passSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Enter registered Email Address.'),
    });

    return (
        <Formik initialValues={{ email: '' }}
            onSubmit={(values, { resetForm }) => {
                forgotPassApi(values);

            }}
            validationSchema={passSchema}    >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <SafeAreaView style={style.container}>
                    <ImageBackground style={style.container} source={require('../../assets/imageslog/backgroundImg.png')}>
                        <ScrollView style={style.container}>

                            <View style={style.firstView}>
                                {/* <Image source={images.vector}/> */}
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image source={require('../../assets/imageslog/Vector.png')} style={style.iconrightChevron} />
                                </TouchableOpacity>
                                <View style={style.wlcTextView}>
                                    <Text style={style.wlcText}>Reset Password</Text>
                                    <Text style={style.wlcsubtitleText}>Enter your email address to reset your password</Text>
                                </View>
                            </View>
                            <View style={[style.secView, { marginTop: '30%' }]}>
                                {/* <Text>Helloo</Text> */}
                                <View style={{ marginHorizontal: 20 }}>
                                    <Text style={style.txtFieldTitle}>Email Address</Text>
                                    <View style={style.txtFieldView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Entypo name={'mail'} size={20} style={style.custIcon} />
                                            <TextInput placeholder="Registered Email Address"
                                                style={style.textboxfield}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                    </View>
                                    {errors.email && touched.email && <Text style={style.error}>{errors.email}</Text>}
                                    <TouchableOpacity style={style.logbtn}
                                        onPress={handleSubmit}>
                                        <AntDesign size={20} name="login" color="white" />
                                    </TouchableOpacity>
                                    <Text style={style.loginButton}>Reset</Text>
                                </View>
                            </View>


                        </ScrollView>
                    </ImageBackground>
                </SafeAreaView>
            )}
        </Formik>
    )
}
export default ForgotPassword;