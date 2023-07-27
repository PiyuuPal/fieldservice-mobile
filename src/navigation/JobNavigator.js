import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { NAVIGATION } from '@/constants';
import { Login } from '@/screens';
import { TabBarIcon } from '@/components';
import { JobDetails } from '@/screens/JobDetails/JobDetails';

import { JOB } from '@/constants/navigation';

import Timeline from '@/screens/Timeline/Timeline';
import { Positions } from 'react-native-calendars/src/expandableCalendar';
const Tab = createBottomTabNavigator();
import { useNavigation } from '@react-navigation/native';
import { JobDetailsNavigator } from './JobDetailsNavigator';
import Actions from '@/screens/Actions/Actions';
export function JobNavigator() {

  const navigation = useNavigation();
  const { colors } = useTheme();
  useEffect(() => {
    const grandparentNavigation = navigation.getParent('rootNavigator');

    if (grandparentNavigation) {
      const screenOptions = {
        tabBarStyle: { display: 'none' },
      };
      try {
        grandparentNavigation.setOptions(screenOptions);
      } catch (error) {
        
      }
    } else {
      
    }
    return () => {
      if (grandparentNavigation) {
        const screenOptions = {
          tabBarStyle: {},
        };
        try {
          grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
          
        }
      }
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarVisible: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
      })}
    >
      {/* <Tab.Screen options={{ headerShown: false }} children={() => <JobDetailsNavigator screenProps={{ jobId: route?.params?.jobId }} />} name={JOB.details} /> */}
      <Tab.Screen component={JobDetailsNavigator} name={JOB.details}/>
      <Tab.Screen options={{ headerShown: false }} component={Actions} name={JOB.actions} />
      <Tab.Screen options={{ headerShown: false }} component={Timeline} name={JOB.timeline} />
    </Tab.Navigator>
  );
}
