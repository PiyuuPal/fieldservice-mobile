import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Text } from 'react-native';
import OnMyWay from '@/screens/OnMyWay/OnMyWay';
import { ExistingClientList } from '@/screens/ExistingClientList/ExistingClientList';
import ChatScreen from '@/screens/ChatScreen/ChatScreen';
import ClientDetail from '@/screens/ClientDetailScreen/ClientDetail';
import { Address } from '@/screens/Address/Address';
import Schedule from '@/screens/Schedule/Schedule';


import ClientInvoices from '@/screens/Invoices/ClientInvoices';
import ClientEstimates from '@/screens/Estimates/ClientEstimates';
import ClientJobs from '@/screens/JobCreate/ClientJobs';

const Stack = createNativeStackNavigator();
const CustomTabHeader = ({ title }) => {
    return <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>;
};

export function BottomNavigator() {
    return (
        <Stack.Navigator id="BottomNavigator" screenOptions={{
            headerShown: false
        }}>
            {/* <Stack.Screen name={NAVIGATION.existingClientList} component={ExistingClientList} />
            <Stack.Screen name={NAVIGATION.chatBoard} component={ChatScreen} />
            <Stack.Screen name={NAVIGATION.clientDetailafterEdit} component={ClientDetail} />
            <Stack.Screen name={NAVIGATION.schedule} component={Schedule} />
            <Stack.Screen name={NAVIGATION.clientInvoices} component={ClientInvoices} />
            <Stack.Screen name={NAVIGATION.clientJob} component={ClientJobs} />
            <Stack.Screen name={NAVIGATION.clientEstimates} component={ClientEstimates} />
            <Stack.Screen name={NAVIGATION.address} component={Address} />
            <Stack.Screen name={NAVIGATION.eta} component={OnMyWay} /> */}

        </Stack.Navigator>
    );
}