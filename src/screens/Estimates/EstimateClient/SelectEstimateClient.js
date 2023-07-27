import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ShowToastMessage } from "@/helpers";
import { exisitngClientListFun, storeClientData } from "@/actions/UserActions";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
 
} from "react-native";
import { backgroundImage } from "@/assets";
import Entypo from 'react-native-vector-icons/Entypo';
import { style } from "./SelectEstimateClient.styles";
import { spacing } from '@/theme';
import { NAVIGATION } from "@/constants";
export const SelectEstimateClient = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const existClientListData = useSelector(
    (state) => state?.user?.existClientListReducer?.clientDetails
  );
  const [selectedId, setSelectedId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [ponumber,setponumber]=useState(null);
  useEffect(() => {
    dispatch(exisitngClientListFun(navigation));
  }, []);
  useEffect(() => {
   
    const grandparentNavigation = navigation.getParent("rootNavigator");

    if (grandparentNavigation) {
      const screenOptions = {
        tabBarStyle: { display: "none" },
      };
      try {
        grandparentNavigation.setOptions(screenOptions);
      } catch (error) {
        console.log("Error occurred while setting options:", error);
      }
    } else {
      console.log("grandparentNavigation is null or undefined");
    }
   
    return () => {
      if (grandparentNavigation) {
        const screenOptions = {
          tabBarStyle: { backgroundColor: "#FCFDFF", height: 80 },
        };
        try {
          grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
          console.log("Error occurred while setting options:", error);
        }
      }
    };
  }, []);
  useEffect(() => {
    // Filter the existClientListData based on the searchText
    const filteredResults = existClientListData?.filter((client) => {
      const fullName = `${client?.first_name} ${client?.last_name}`.toLowerCase();
      return fullName.includes(searchText.toLowerCase());
    });

    setSearchResults(filteredResults);
  }, [searchText, existClientListData]);

  const handletext = (text) => {
    setSearchText(text);
    setSelectedId(null);
  };

  const handleCreateNewClient = () => {
    // Handle creating a new client logic
  };
   const handlesubmit=()=>{
    
    if(ponumber==null||ponumber==="")
    {
     ShowToastMessage("Please enter PO number");
    }
    else if(selectedId===null)
    {
      ShowToastMessage("Please select client name from the list");
    }
    else
    navigation.navigate('Create Invoice', { clientId: selectedId, type: 'client',poNumber:ponumber })
   };
  return (
    <SafeAreaView style={style.container}>
         <View style={style.firstView}>
                <ImageBackground source={backgroundImage}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <Entypo name="chevron-left" size={30} style={style.custIcon} onPress={() => navigation.goBack()} />
                            <Text style={style.headerTitle}>Create new Estimate</Text>
                        </View>
                       
                    </View>
                    </ImageBackground>
                    <View style={style.items}>
      <TouchableOpacity onPress={handleCreateNewClient} style={style.addbutton}>
        <Text style={style.addbuttontext} 
        // onPress={()=>navigation.navigate(NAVIGATION.addNewClient,{screen:"invoice"})}
        >Create New Client</Text>
      </TouchableOpacity>
      <Text style={style.ortext}>OR</Text>
      <TextInput
        value={ponumber}
        onChangeText={(text) => setponumber(text)}
        placeholder="Po No"
        style={[style.textbox,{marginBottom:15}]}
      />
      <TextInput
        value={searchText}
        onChangeText={(text)=>handletext(text)}
        placeholder="Search client"
        style={style.textbox}
      />
   

      {/* Render search results if searchText is not empty */}
      {searchText !== "" && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={style.nameview}
              onPress={() => {
                setSearchText(`${item.first_name} ${item.last_name}`);
                setSelectedId(item.id);
              }}
            >
              <Text>{item.first_name}</Text>
              <Text style={{marginLeft:3}}>{item.last_name}</Text>
            </TouchableOpacity>
          )}
          
          style={style.flatlist}
        />
      )}
     
      </View>
      <TouchableOpacity onPress={()=> handlesubmit()} style={style.createbutton}>
       <Text style={style.createbuttontext}>Create Invoice</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
