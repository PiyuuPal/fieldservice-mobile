import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import Messages from './../screens/Messages/Messages';

const Stack = createNativeStackNavigator();

export function MessageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.messages}
        component={Messages}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}
