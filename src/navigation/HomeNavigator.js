import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NAVIGATION } from "@/constants";
import { Text } from "react-native";
import Home from "@/screens/Home/Home";
import ETANavigator from "@/navigation/ETANavigator";
import { JobNavigator } from "./JobNavigator";

import { ExistingClientList } from "@/screens/ExistingClientList/ExistingClientList";
import { AdSource } from "@/screens/AdSource/AdSource";
import { Address } from "@/screens/Address/Address";
import { CountryList } from "@/screens/CountryList/CountryList";
import { StateList } from "@/screens/StateList/StateList";
// import Createclient from '@/screens/Createclient/Createclient';
import JobSchedule from "@/screens/JobSchedule/JobScheduleScreen";
import { CreateProfile } from "@/screens/CreateProfile/CreateProfile";
import Notification from "@/screens/Notification/Notification";
import JobCreate from "@/screens/JobCreate/JobCreate";
import JobLead from "@/screens/JobLead/JobLead";
import ScheduleFilters from "@/screens/ScheduleFilters/ScheduleFilters";

import Invoices from "@/screens/Invoices/Invoices";
import Estimates from "@/screens/Estimates/Estimates";
import AddNewClient from "@/screens/AddNewClient/AddNewClient";
import { Invoice } from "@/screens/JobDetails/Invoice";
import JobAllDetails from "@/screens/JobDetails/JobAllDetails";
import { Payment } from "@/screens/JobDetails/Payment";
import { Quotes } from "@/screens/JobDetails/Quotes";
import { Files } from "@/screens/JobDetails/Files";

import { JobDetails } from "@/screens/JobDetails/JobDetails";
import { JobDetailsNavigator } from "./JobDetailsNavigator";
import { JOB } from "@/constants/navigation";
// import { JobDetails } from '@/screens/JobDetails/JobDetails';
// import { JobType } from '@/screens/jobType/jobType';
import { JobType } from "@/screens/JobType/jobType";
import { CreateInvoice } from "@/screens/CreateInvoice/CreateInvoice";
import { InvoiceItems } from "@/screens/InvoiceItems/InvoiceItems";
import { ItemQuantity } from "@/screens/ItemQuantity/ItemQuantity";
import { SelectClient } from "@/screens/SelectClient/SelectClient";
import { InvoicePayments } from "@/screens/InvoicePayments/InvoicePayments";
import { InvoiceSignatures } from "@/screens/InvoiceSignatures/InvoiceSignatures";
import { InvoiceNotes } from "@/screens/InvoiceNotes/InvoiceNotes";
import { JobTags } from "@/screens/JobTags/JobTags";
import { Team } from "@/screens/Team/Team";
import { InvoiceAttachments } from "@/screens/InvoiceAttachments/InvoiceAttachments";
import { CreateEstimate } from "@/screens/Estimates/CreateEstimate";
import ClientJobs from "@/screens/JobCreate/ClientJobs";
import AllJobs from "@/screens/JobCreate/AllJobs";
import Chatting from "@/screens/Chatting/Chatting";
import { SelectEstimateClient } from "@/screens/Estimates/EstimateClient/SelectEstimateClient";
import AddQuantityItems from "@/screens/InvoiceItems/AddQuantityItems";
import ClientDetail from "@/screens/ClientDetailScreen/ClientDetail";
import { DrawerNavigator } from "./DrawerNavigator";
import CompletePayment from "@/screens/InvoicePayments/CompletePayment";
import JobMessage from "@/screens/JobDetails/JobMessage";
import { JobAttachmentsListing } from "@/screens/JobDetails/JobAttachmentsListing";
import { TimeLines } from "@/screens/JobDetails/TimeLines";
import { TimelineTabNavigator } from "./TimelineTabNavigator";
const Stack = createNativeStackNavigator();
const CustomTabHeader = ({ title }) => {
  return <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>;
};

export function HomeNavigator() {
  return (
    <Stack.Navigator
      id="HomeNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{ headerShown: false }}
      />
     
      {/* <Stack.Screen name={NAVIGATION.jobDetails}  component={JobDetails } /> */}
      <Stack.Screen
        name={NAVIGATION.jobDetails}
        component={JobDetails}
        options={{ headerShown: false }}
      />

    
      <Stack.Screen
        name={NAVIGATION.existingClientList}
        component={ExistingClientList}
      />

      <Stack.Screen
        name={NAVIGATION.jobSchedule}
        component={JobSchedule}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={NAVIGATION.address} component={Address} />
      <Stack.Screen name={NAVIGATION.countryList} component={CountryList} />
      <Stack.Screen name={NAVIGATION.jobcreate} component={JobCreate} />
      <Stack.Screen name={NAVIGATION.jobLead} component={JobLead} />
      <Stack.Screen name={NAVIGATION.allJobs} component={AllJobs} />
      <Stack.Screen name={NAVIGATION.jobInvoices} component={Invoices} />
      <Stack.Screen name={NAVIGATION.paymentSuccess} component={CompletePayment} />
      <Stack.Screen name={NAVIGATION.addNewClient} component={AddNewClient} />
      <Stack.Screen name={NAVIGATION.stateList} component={StateList} />
      <Stack.Screen name={NAVIGATION.Notification} component={Notification} />
      <Stack.Screen name={NAVIGATION.CreateInvoice} component={CreateInvoice} />
      <Stack.Screen name={NAVIGATION.clientDetailafterEdit} component={ClientDetail} />
      <Stack.Screen name={NAVIGATION.InvoiceItems} component={InvoiceItems} />
      <Stack.Screen name={NAVIGATION.addQuantityItems} component={AddQuantityItems} />
      <Stack.Screen name={NAVIGATION.ItemQuantity} component={ItemQuantity} />
      <Stack.Screen name={NAVIGATION.SelectClient} component={SelectClient} />
      <Stack.Screen name={NAVIGATION.SelectEstimateClient} component={SelectEstimateClient} />
      <Stack.Screen name={NAVIGATION.InvoicePayments} component={InvoicePayments} />
      <Stack.Screen name={NAVIGATION.jobEstimates} component={Estimates} />
      <Stack.Screen name={NAVIGATION.InvoiceSignatures} component={InvoiceSignatures} />
      <Stack.Screen name={NAVIGATION.InvoiceNotes} component={InvoiceNotes} />
      <Stack.Screen name={NAVIGATION.Invoice} component={Invoice} />
      <Stack.Screen name={NAVIGATION.Timeline}screenOptions={{ headerShown: false }} component={TimelineTabNavigator} />
      <Stack.Screen name={NAVIGATION.Payment} component={Payment} />
      <Stack.Screen name={NAVIGATION.Quotes} component={Quotes} />
      <Stack.Screen name={NAVIGATION.Files} component={Files} />
      <Stack.Screen name={NAVIGATION.ETANavigator} component={ETANavigator} />
      {/* <Stack.Screen name={NAVIGATION.eta} options={{headerTitle: () => <CustomTabHeader title="On My Way" />}} component={ETANavigator}/> */}
      <Stack.Screen name={NAVIGATION.jobTags} component={JobTags} options={{ headerShown: false }}/>
      <Stack.Screen name={NAVIGATION.team} component={Team}/>
      <Stack.Screen name={NAVIGATION.jobAttachmentsList} component={JobAttachmentsListing} options={{ headerShown: false }}/>
      <Stack.Screen name={NAVIGATION.InvoiceAttachments} component={InvoiceAttachments} />
      <Stack.Screen name={NAVIGATION.CreateEstimate} component={CreateEstimate}/>
      <Stack.Screen name={NAVIGATION.Chatting} component={Chatting} />
      <Stack.Screen name={NAVIGATION.jobMessage} component={JobMessage} />
      
      {/* <Stack.Screen
        name={NAVIGATION.eta}
        options={{
          headerTitle: () => <CustomTabHeader title="On My Way" />,
        }}
        component={ETANavigator}
      /> */}
    </Stack.Navigator>
  );
}
