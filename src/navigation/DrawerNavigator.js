import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '@/screens';
import { AppNavigator } from './AppNavigator';
import JobSchedule from '@/screens/JobSchedule/JobScheduleScreen';

import { MessageNavigator } from './MessagesNavigator';
import { ExistingClientList } from '@/screens/ExistingClientList/ExistingClientList';
import { TABS } from '@/constants/navigation';
import { CustomDrawer } from '@/screens/CustomDrawer';
import { DrawerIcon } from '@/components/DrawerIcon';
import Estimates from '@/screens/Estimates/Estimates';
import Invoices from '@/screens/Invoices/Invoices';
import ClientJobs from '@/screens/JobCreate/ClientJobs';
import SettingScreen from '@/screens/SettingScreen/Setting';
import GetHelpScreen from '@/screens/GetHelp.js/GetHelpScreen';
import AllJobs from '@/screens/JobCreate/AllJobs';
import { Timesheet } from '@/screens/DrawerScreens/Timesheet';
const Drawer = createDrawerNavigator();
export function DrawerNavigator() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        gestureEnabled: true,
        drawerIcon: ({ color }) =>
          <DrawerIcon color={color} routeName={route.name} />
      })} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={AppNavigator} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
      <Drawer.Screen name="Timesheets" component={Timesheet} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
      <Drawer.Screen name="Jobs" component={AllJobs} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
      {/* <Drawer.Screen name="Leads" component={CreateJob} options={{ tabBarLabel: '' }} /> */}
      <Drawer.Screen name="Invoices" component={Invoices} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
      <Drawer.Screen name="Estimates" component={Estimates} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
      <Drawer.Screen name="Settings" component={SettingScreen} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
      <Drawer.Screen name="Get Help" component={GetHelpScreen} options={{ drawerLabelStyle: { color: '#041B3E' } }} />
    </Drawer.Navigator>
  )
}
