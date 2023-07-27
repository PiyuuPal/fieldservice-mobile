import { NAVIGATION } from '@/constants';
import { spacing } from '@/theme';
import React, { Component } from 'react'
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text, View,SafeAreaView,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { createClient } from '@/actions/UserActions';
export function ClientDetails ({navigation}){
    const dispatch=useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [extNumber, setExtNumber] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
   const createNewClient=()=>{
    
    const data={
        first_name:firstName,
        last_name:lastName,
        company_name:companyName,
        phone_number:phoneNumber,
        email:email,
        address1:"lucknow city",
        city:"lucknow",
        state:"bihar",
        zip:"226001",
        country:"india",
        ad_source_id:"1",
        is_allow_billing:"1",
    }
    
    dispatch(createClient(data, navigation));
   }

    return (
        <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, padding: spacing.m }}>
        
          <View style={{ backgroundColor: 'green', flexDirection: 'row', borderBottomWidth: 1 }}>
            <TextInput
              placeholder="First Name"
              style={{ backgroundColor: 'white', flex: 1, marginRight: 2 }}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              placeholder="Last Name"
              style={{ backgroundColor: 'white', flex: 1 }}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={{ backgroundColor: 'green', flexDirection: 'row', borderBottomWidth: 1 }}>
            <TextInput
              placeholder="Phone Number"
              style={{ backgroundColor: 'white', flex: 3, marginRight: 2 }}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <TextInput
              placeholder="Ext #"
              style={{ backgroundColor: 'white', flex: 1 }}
              value={extNumber}
              onChangeText={(text) => setExtNumber(text)}
            />
          </View>
          <View style={{ backgroundColor: 'green', borderBottomWidth: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NAVIGATION.address);
              }}
              style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', padding: 10 }}
            >
              <Text>Address</Text>
              <Feather name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'green', borderBottomWidth: 1 }}>
            <TextInput
              placeholder="Email Address"
              style={{ backgroundColor: 'white', padding: 10 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ backgroundColor: 'green', borderBottomWidth: 1, marginBottom: 5 }}>
            <TextInput
              placeholder="Client Company name"
              style={{ backgroundColor: 'white', padding: 10 }}
              value={companyName}
              onChangeText={(text) => setCompanyName(text)}
            />
          </View>
          <TouchableOpacity onPress={createNewClient}  style={{padding:20,backgroundColor:'purple',justifyContent:'center',alignItems:'center',borderRadius:50,marginTop:50}}>
             <Text style={{color:'white',fontWeight:'bold'}}>Save</Text>
          </TouchableOpacity>
         </View>
         </ScrollView>
        </SafeAreaView>
    )
}
