import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import {  Login } from '@/screens';
import { Splash } from '@/screens/SplashScreen/Splash';
import { AppNavigator } from './AppNavigator';
import { DrawerNavigator } from './DrawerNavigator';
import SignIn from '@/screens/SignIn/SingnIn';
import SignUp from '@/screens/SignUp/SignUp';
import { CreateProfile } from '@/screens/CreateProfile/CreateProfile';
import BusinessSelection from '@/screens/BusinessSelection/BusinessSelection';
import BusinessWork from '@/screens/BusinessWork/BusinessWork';
import ForgotPassword from '@/screens/ForgotPassword/ForgotPassword';
import RegisteredAddress from '@/screens/RegisteredAddress/RegisteredAdress';
import { CountryList } from '@/screens/CountryList/CountryList';
import { StateList } from '@/screens/StateList/StateList';
import MapViews from '@/screens/MapView/MapViews';
const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Splash} name={NAVIGATION.splash} />
      <Stack.Screen component={ForgotPassword} name={NAVIGATION.forgotpassword} />
      <Stack.Screen component={SignIn} name={NAVIGATION.signin} />
      <Stack.Screen component={SignUp} name={NAVIGATION.signup} />
      <Stack.Screen component={RegisteredAddress} name={NAVIGATION.registeredAddress} />
      <Stack.Screen component={CountryList} name={NAVIGATION.countryList} />
      <Stack.Screen component={StateList} name={NAVIGATION.stateList} />
      <Stack.Screen component={CreateProfile} name={NAVIGATION.CreateProfile} />
      <Stack.Screen component={BusinessSelection} name={NAVIGATION.BusinessSelection} />
      <Stack.Screen component={BusinessWork} name={NAVIGATION.BusinessWork} />
      <Stack.Screen component={MapViews} name={NAVIGATION.MapViews} />
    </Stack.Navigator>
  );
}
