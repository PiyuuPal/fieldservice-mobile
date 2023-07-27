import { cyberwolf, splash } from '@/assets';
import { NAVIGATION } from '@/constants';
import { spacing } from '@/theme';
import { font } from '@/theme/font';
import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet, ImageBackground, Image, Text, TouchableOpacity,ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export function Splash({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle= { {flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={splash}
          style={styles.background}
          resizeMode="cover"
        >
          <Image
            source={cyberwolf}
            style={styles.logo}
            resizeMode="contain"
          />
        </ImageBackground>
        <ImageBackground
          source={splash}
          style={[styles.background, { alignItems: 'center' }]}
          resizeMode="cover"
        >
          <Text style={styles.txtheader}>LET'S GET STARTED</Text>
          <Text style={styles.txtWelcome}>Welcome to the Cyber Wolf & Choose</Text>
          <Text style={styles.txtproceed}>How to proceed</Text>
          <TouchableOpacity style={styles.logbtn} onPress={()=>navigation.navigate(NAVIGATION.signin)}>
            <AntDesign size={20} name="login" color="white" />
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#041B3E',fontFamily:font.bold}}>Log In</Text>
          <View style={{ width: '100%', padding: 20}}>
            <TouchableOpacity style={styles.accbtn} onPress={()=>navigation.navigate(NAVIGATION.signup)}>
              <Text style={styles.acctxt}>Create a New Account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  txtWelcome:{
    fontSize: 16,
     marginTop: 5,
     fontFamily:font.regular,
     fontWeight:'600' 
  },
  txtproceed:{
    fontSize: 16 ,
    fontFamily:font.regular,
    fontWeight:'600'
  },
  txtheader: {
    color: '#195190',
    // fontWeight: '800',
    fontSize: 30,
    // fontFamily: 'Sans',
    alignSelf: 'center',
    marginTop:50,
    fontFamily:'OpenSans_Condensed-Bold'
  },
  logo: {
    width: 217,
    height: 220,
    alignSelf: 'center',
    marginTop: 70,
  },
  accbtn: {
    borderWidth: 1,
    borderColor: '#195090',
    borderRadius: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logbtn: {
    backgroundColor: '#195190',
    borderRadius: 30,
    padding: 20,
    marginTop: 25,
  },
  acctxt:{
    color: '#195090',
     fontSize: 17 ,
     fontWeight:'700',
     fontFamily:'OpenSans_Condensed-Medium',
     
  }
});
