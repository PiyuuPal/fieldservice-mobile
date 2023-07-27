import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigator } from '@/navigation/AppNavigator';
import { AuthNavigator } from '@/navigation/AuthNavigator';
import { getUser } from '@/selectors/UserSelectors';
import { theme } from '@/theme';
import { DrawerNavigator } from './DrawerNavigator';

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      {user ? <DrawerNavigator/> : <AuthNavigator />}
    </NavigationContainer>
  );
}
