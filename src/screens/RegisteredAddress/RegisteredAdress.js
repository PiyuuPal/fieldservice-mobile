import React, { useRef, useState ,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import { style } from './RegisteredAddress.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { spacing } from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { storeGoogleAddress } from '@/actions/UserActions';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { font } from '@/theme/font';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const RegisteredAddress = () => {
  const firstname = useSelector((state) => state?.business?.userData?.firstname);
  const storeCountryListData = useSelector((state) => state?.business?.storeCountryListReducer);
  
  const storeStateListData = useSelector((state) => state?.business?.storeStateListReducer);
  
  const storegoogleData = useSelector((state) => state?.business?.storeGoogleAddreesListReducer);
  

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [aptFloar, setAptFloar] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState(20.5937);
  const [longitude, setLongitude] = useState(78.9629);
  const [zipCode, setZipCode] = useState('');
  useEffect(() => {
    // Zoom to the marker's location when latitude or longitude changes
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    }
  }, [latitude, longitude]);

  const storeAddress = () => {
    const data = {
      address1: address,
      city: city,
      state: state,
      country: country,
      zip: zipCode,
      address2:""
    };
    
    dispatch(storeGoogleAddress(data, navigation));
  };


  const mapRef = useRef();

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        style={style.container}
        source={require('../../assets/imageslog/backgroundImg.png')}
      >
        <ScrollView style={style.container}>
          <View style={style.firstView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/imageslog/Vector.png')}
                style={style.iconrightChevron}
              />
            </TouchableOpacity>
            <View style={style.wlcTextView}>
              <Text style={style.wlcText}>Welcome {firstname}</Text>
              <Text style={style.wlcsubtitleText}>
                Enter your business address to setup your account
              </Text>
            </View>
          </View>
          <View style={style.secmainView}>
            <View style={style.secView}>
              

              <MapView
                style={{ width: '100%', height: '90%',}}
                showsUserLocation={false}
                provider="google"
                ref={mapRef}
             
             

                >
                <Marker coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                }}/>
                </MapView> 
            </View>
          </View>

          <View style={style.thirdView}>
            {/* <Text style={style.txtFieldTitle}>Address Name</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={[style.textboxfield, { borderBottomWidth: 1, width: '90%' }]} placeholder="Search your Address" />
                            <Feather name={'search'} size={20} style={[style.custIcon, { marginLeft: -30, marginBottom: -10 }]} />
                            
                        </View> */}
            {/* <View style={{ position: 'absolute', left: 0, right: 0, zIndex: 1, padding: spacing.m, marginTop: 200 }}> */}
            <Text style={style.txtFieldTitle}>Search for Address</Text>
            <ScrollView keyboardShouldPersistTaps={'handled'}>
              <GooglePlacesAutocomplete
                placeholder="Enter Location"
                styles={{
                  textInputContainer: {
                    // backgroundColor: 'grey',

                    borderWidth: 1,
                    boderRadius: 10,
                    padding: 2,
                  },
                  textInput: {
                    // height: 38,
                    color: '#5d5d5d',
                    fontSize: 16,
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb',
                  },
                }}
                fetchDetails={true}
                keepResultsAfterBlur={true}
                onPress={(data, details = null) => {
                  
                  
                  const addressComponents = details?.address_components;
                  
                  const latLong = details?.geometry?.location;
                  
                  let postalCode = '';
                  let state = '';
                  let address = '';
                  let country = '';
                  let city = '';
                  let latitude = '';
                  let longitude = '';
                  latitude = details?.geometry?.location?.lat;
                  longitude = details?.geometry?.location?.lng;
                  address = details?.formatted_address;
                  country = details?.address_components.find((c) =>
                    c.types.includes('country')
                  )?.long_name;
                  city = details?.address_components.find((c) =>
                    c.types.includes('locality')
                  )?.long_name;
                  for (let i = 0; i < addressComponents.length; i++) {
                    const types = addressComponents[i].types;
                    for (let j = 0; j < types.length; j++) {
                      if (types[j] === 'postal_code') {
                        postalCode = addressComponents[i].long_name;
                      }
                      if (types[j] === 'administrative_area_level_1') {
                        state = addressComponents[i].long_name;
                      }
                    }
                  }
                  setAddress(address);
                  setCity(city);
                  setCountry(country);
                  setZipCode(postalCode);
                  setState(state);
                  setLatitude(latitude);
                  setLongitude(longitude);
                  // 
                  // 
                  // 
                  // 
                  // 
                  
                  
                }}
                query={{
                  key: 'AIzaSyAo57iuaP1NHJ_e3u9hAdS50JcWL2qILsI',
                  language: 'en',
                }}
              />
            </ScrollView>
            {/* </View> */}

            <Text style={[style.txtFieldTitle, { marginTop: 5 }]}>Address</Text>
            <View style={[style.txtFieldView]}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name={'location'} size={20} style={style.custIcon} />
                <TextInput
                  placeholder="Address"
                  style={style.textboxfield}
                  value={address ? address : ''}
                  onChangeText={(text) => setAddress(text)}
                  maxLength={50}
                />
              </View>
            </View>

            <Text style={[style.txtFieldTitle, { marginTop: 5 }]}>Apt/Suite/Floar</Text>
            <View style={[style.txtFieldView]}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name={'location'} size={20} style={style.custIcon} />
                <TextInput
                  placeholder="Apt/Suite/Floor"
                  style={style.textboxfield}
                  onChangeText={(text) => setAptFloar(text)}
                  maxLength={50}
                />
              </View>
            </View>

            <Text style={[style.txtFieldTitle, { marginTop: 5 }]}>City</Text>
            <View style={[style.txtFieldView]}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name={'location'} size={20} style={style.custIcon} />
                <TextInput
                  placeholder="City"
                  style={style.textboxfield}
                  onChangeText={(text) => setCity(text)}
                  value={city ? city : ''}
                  maxLength={50}
                />
              </View>
            </View>

            <Text style={[style.txtFieldTitle, { marginTop: 5 }]}>State</Text>
            
            <View style={[style.txtFieldView]}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name={'location'} size={20} style={style.custIcon} />
                <TextInput
                  placeholder="State"
                  style={style.textboxfield}
                  onChangeText={(text) => setState(text)}
                  value={state ? state : ''}
                  maxLength={50}
                />
              </View>
            </View>

            <Text style={[style.txtFieldTitle, { marginTop: 5 }]}>Country</Text>
            
            <View style={[style.txtFieldView]}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name={'location'} size={20} style={style.custIcon} />
                <TextInput
                  placeholder="Country"
                  style={style.textboxfield}
                  onChangeText={(text) => setCountry(text)}
                  value={country ? country : ''}
                  maxLength={50}
                />
              </View>
            </View>

            <Text style={[style.txtFieldTitle, { marginTop: 5 }]}>Pin Code</Text>
            <View style={[style.txtFieldView]}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name={'pin'} size={20} style={style.custIcon} />
                <TextInput
                  placeholder="Pin Code"
                  style={style.textboxfield}
                  value={zipCode ? zipCode : ''}
                  keyboardType="number-pad"
                  onChangeText={(text) => setZipCode(text)}
                  maxLength={50}
                />
              </View>
            </View>
            <TouchableOpacity style={style.logInbutton} onPress={storeAddress}>
              <View style={style.logInbuttonView}>
                <Entypo name="arrow-right" size={20} style={style.logInbuttonIcon} />
              </View>
              <Text style={[style.txtFieldTitle, { fontSize: 16 }]}>Next</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: spacing.xl }}></View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default RegisteredAddress;