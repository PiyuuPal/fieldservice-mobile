import React, { useState, Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { spacing } from '@/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { logout } from '@/actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cyberwolf, noAvailableImg, person } from '@/assets';

export function CustomDrawer(props, route) {

  const getsocialLogInUser = useSelector((state) => state?.user?.googleLogInReducer?.data);
  // console.log('---->',getsocialLogInUser)
  const googleSignUp = useSelector((state) => state?.business?.googleSignUpReducer?.data);
  const loginName = useSelector((state) => state?.user?.data);
  const userName = useSelector((state) => state?.business?.userData);

  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    AsyncStorage.removeItem('schedule Filters');
  };
  return (
    <SafeAreaView style={{ flexGrow: 1, }}>
      <View style={{ flex: 1, borderTopEndRadius: 40, borderBottomEndRadius: 40 }}>
        <ImageBackground resizeMode='cover' source={require('@/assets/CreateProfile/signupbackground.png')} style={{ flex: 1, padding: spacing.m, borderTopEndRadius: 40, borderBottomEndRadius: 40 }}>
          <DrawerContentScrollView {...props}>
            {loginName ? (<View style={styles.alignfield}>
              <View style={{ backgroundColor: '#ECECEC', height: 100, width: 100, borderRadius: 100, padding: 20 }}>
                <Image source={{ uri: loginName?.user_image } ? { uri: loginName?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%' }} />
              </View>
              <Text style={{ marginVertical: 5, fontSize: 22, color: '#041B3E', fontWeight: '600' }}>{loginName?.firstname ? loginName?.firstname : userName?.firstname} {loginName?.lastname ? loginName?.lastname : ''}</Text>
              <Text style={{ fontSize: 15 }}>{loginName?.company_name ? loginName?.company_name : ''}</Text>
            </View>) : getsocialLogInUser ? (<View style={styles.alignfield}>
              <View style={{ backgroundColor: '#ECECEC', height: 100, width: 100, borderRadius: 100, padding: 20 }}>
                <Image source={{ uri: getsocialLogInUser?.user_image } ? { uri: getsocialLogInUser?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%' }} />
              </View>
              <Text style={{ marginVertical: 5, fontSize: 22, color: '#041B3E', fontWeight: '600' }}>{getsocialLogInUser?.firstname ? getsocialLogInUser?.firstname : ''} {getsocialLogInUser?.lastname ? getsocialLogInUser?.lastname : ''}</Text>
              <Text style={{ fontSize: 15, }}>{getsocialLogInUser?.company_name ? getsocialLogInUser?.company_name : ''}</Text>
            </View>) : userName ? (<View style={styles.alignfield}>
              <View style={{ backgroundColor: '#ECECEC', height: 100, width: 100, borderRadius: 100, padding: 20 }}>
                <Image source={{ uri: userName?.user_image } ? { uri: userName?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%' }} />
              </View>
              <Text style={{ marginVertical: 5, fontSize: 22, color: '#041B3E', fontWeight: '600' }}>{userName?.firstname ? userName?.firstname : ''} {userName?.lastname ? userName?.lastname : ''}</Text>
              <Text style={{ fontSize: 15, }}>{userName?.company_name ? userName?.company_name : ''}</Text>
            </View>) : googleSignUp ? (<View style={styles.alignfield}>
              <View style={{ backgroundColor: '#ECECEC', height: 100, width: 100, borderRadius: 100, padding: 20 }}>
                <Image source={{ uri: googleSignUp?.user_image } ? { uri: googleSignUp?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%' }} />
              </View>
              <Text style={{ marginVertical: 5, fontSize: 22, color: '#041B3E', fontWeight: '600' }}>{googleSignUp?.firstname ? googleSignUp?.firstname : ''} {googleSignUp?.lastname ? googleSignUp?.lastname : ''}</Text>
              <Text style={{ fontSize: 15, }}>{googleSignUp?.company_name ? googleSignUp?.company_name : ''}</Text>
            </View>) : null}

            <View style={{ paddingTop: 15 }}>
              <DrawerItemList {...props} />
            </View>
            <View style={styles.alignfield}>
              <TouchableOpacity onPress={logoutUser} style={{ borderRadius: 30, marginTop: 20 }}>
                <Image style={{ alignSelf: 'center' }} source={require('../../src/assets/images/logout.png')} />
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  alignfield: {
    justifyContent: 'center',
    alignItems: "center",
  },
  logbtn: {
    backgroundColor: '#195190',
    borderRadius: 30,
    padding: 20,
    marginTop: 25,
  },
})