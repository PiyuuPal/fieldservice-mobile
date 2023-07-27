import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  ActivityIndicator, // Import ActivityIndicator
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from "@react-native-community/checkbox";
import { backgroundImage } from "@/assets";
import { font } from "@/theme/font";
import { spacing } from "@/theme";
import { styles } from "./ScheduleFiltersStyles.js";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import storage from '@/storage/index';
import {
  scheduleFilterList,
  scheduleFilteritemList,
} from "@/actions/UserActions.js";
import { NAVIGATION, TABS } from "@/constants/navigation.js";

export default function ScheduleFilters() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ScheduleFilters = useSelector((state) => state.user.scheduleFilter);
  const scheduleFilterItem = useSelector(
    (state) => state.user.scheduleFilterItem
  );
  const [filterItems, setFilterItems] = useState({});
  const [loading, setLoading] = useState(true); // New loading state variable
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectname, setSelectname] = useState("");
  const [selectall, setselectall] = useState(false);
  useEffect(() => {
    dispatch(scheduleFilterList(navigation)).then(() => {
      setLoading(false);
    });
    const grandparentNavigation = navigation.getParent("rootNavigator");

    if (grandparentNavigation) {
      const screenOptions = {
        tabBarStyle: { display: "none" },
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
          tabBarStyle: { backgroundColor: "#FCFDFF", height: 80 },
        };
        try {
          grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
          
        }
      }
    };
  }, []);
  const getItemFromStorage = async () => {
    try {
      const filterItemsString = await AsyncStorage.getItem("schedule Filters");
      if (filterItemsString) {
        const filterItems = JSON.parse(filterItemsString);
        
        setFilterItems(filterItems);
   
       
      } else {
        
        // Dispatch the passed data to the Redux store
        const initialState = {};
        ScheduleFilters?.forEach((filter) => {
          initialState[filter.name] = []; // Initialize each filter item with an empty array
        });
        setFilterItems(initialState);
      }
    } catch (error) {
      
    }
  };
  useEffect(() => {
    setSelectedItem(ScheduleFilters ? ScheduleFilters[0]?.id : "");
    setSelectname(ScheduleFilters ? ScheduleFilters[0]?.name : "");
    dispatch(
      scheduleFilteritemList(ScheduleFilters ? ScheduleFilters[0]?.path : "")
    );
    getItemFromStorage();
   // 
  }, [ScheduleFilters]);
  useEffect(() => {
    // Check if all items are selected initially
    const selectedItems = filterItems[selectname];
    if (selectedItems && selectedItems?.length === scheduleFilterItem?.length) {
      setselectall(true);
    } else {
      setselectall(false);
    }
  }, [filterItems, selectname]);
  const handleCheck = (id) => {
    //
    setFilterItems((filterItems) => {
      const updatedItems = { ...filterItems };
      if (selectname in updatedItems) {
        const itemIndex = updatedItems[selectname].indexOf(id);
        if (itemIndex !== -1) {
          // Item exists, remove it from the array
          updatedItems[selectname].splice(itemIndex, 1);
        } else {
          // Item does not exist, append it to the array
          updatedItems[selectname].push(id);
        }
      } else {
        // Key does not exist, create a new key-value pair
        updatedItems[selectname] = [id];
      }
      return updatedItems;
    });
  };
  const resetall=()=>{
    const initialState = {};
    ScheduleFilters?.forEach((filter) => {
      initialState[filter.name] = []; // Initialize each filter item with an empty array
    });
    setFilterItems(initialState);
  }
  const renderSectionListItem = (item) => {
    switch (selectedItem) {
      case 1:
        return renderStatusItem(item);
      case 2:
        return renderTagItem(item);
      case 3:
        return renderSourceItem(item);
      case 4:
        return renderTeamItem(item);
      case 5:
        return renderTypeItem(item);
      default:
        return null;
    }
  };
  const handleSelectAll = (key) => {
    setFilterItems((filterItems) => {
      const updatedItems = { ...filterItems };
      const selectAllValue = updatedItems[key]?.length; // Invert the current selectAll value

      if (selectAllValue==scheduleFilterItem.length) {
        // Select All: add all item ids to the array
        updatedItems[key] = [];
 
      } else {
        // Deselect All: remove all item ids from the array
        updatedItems[key] = scheduleFilterItem.map((item) => item.id);
      }

      return updatedItems;
    });
  };
  const renderStatusItem = (item) => {
    //
    return (
      <View style={styles.button}>
        <Text style={styles.header}>{item.item.name}</Text>
        <CheckBox
          style={styles.checkbox}
          value={filterItems[selectname]?.includes(item.item.id)}
          onValueChange={() => handleCheck(item.item.id)}
        />
      </View>
    );
  };
  const renderTagItem = (item) => {
    return (
      <View style={styles.button}>
        <View style={[styles.swatch,{backgroundColor:item.item.code}]}></View>
        <Text style={styles.header}>{item.item.name}</Text>
        <CheckBox
          style={styles.checkbox}
          value={filterItems[selectname]?.includes(item.item.id)}
          onValueChange={() => handleCheck(item.item.id)}
        />
      </View>
    );
  };
  const renderSourceItem = (item) => {
    return (
      <View style={styles.button}>
        <Text style={styles.header}>{item.item.ad_group_name}</Text>
        <CheckBox
          style={styles.checkbox}
          value={filterItems[selectname]?.includes(item.item.id)}
          onValueChange={() => handleCheck(item.item.id)}
        />
      </View>
    );
  };
  const renderTeamItem = (item) => {
    return (
      <View style={styles.button}>
        <Text style={styles.header}>
          {item.item.firstname} {item.item.lastname}
        </Text>
        <CheckBox
          style={styles.checkbox}
          value={filterItems[selectname]?.includes(item.item.id)}
          onValueChange={() => handleCheck(item.item.id)}
        />
      </View>
    );
  };
  const renderTypeItem = (item) => {
    return (
      <View style={styles.button}>
        <Text style={styles.header}>{item.item.type_name}</Text>
        <CheckBox
          style={styles.checkbox}
          value={filterItems[selectname]?.includes(item.item.id)}
          onValueChange={() => handleCheck(item.item.id)}
        />
      </View>
    );
  };
  
  const selectstatus = async (item) => {
    setLoading(true); // Show loader when selectstatus is called
    setSelectedItem(item.id);
    setSelectname(item.name);
    await dispatch(scheduleFilteritemList(item.path));
    setLoading(false); // Hide loader after the dispatch is complete
  };

  const renderItem = ({ item, index }) => {
    const isSelected = selectedItem === item.id;

    return (
      <TouchableOpacity
        style={[styles.filterContainer, isSelected && { borderColor: "blue" }]}
        onPress={() => {
          if (isSelected) {
            setSelectedItem(null);
          } else {
            selectstatus(item);
          }
        }}
      >
        {index > 0 && <View style={styles.verticalLine} />}
        <Text style={[styles.filterText, isSelected && { color: "blue" }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
 
  const handleSubmit = async () => {
    
  
    try {
      const filterItemsString = JSON.stringify(filterItems);
      await AsyncStorage.setItem("schedule Filters", filterItemsString);
      
    } catch (error) {
      
    }
  
   navigation.goBack();
  };
  
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImage}>
          <View style={[styles.viewheader, { flexDirection: "row" }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../../assets/images/cancel.png")}
                style={styles.iconrightChevron}
              />
            </TouchableOpacity>
            <Text style={styles.headertext}>Filter Results</Text>
            <TouchableOpacity style={styles.resetbutton} onPress={()=>resetall()}>
              <Text style={styles.resetbuttontext}>Reset</Text>
              <Image
                source={require("@/assets/images/reset.png")}
                style={styles.icon1}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={ScheduleFilters}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.flatlistcontainer}
            showsHorizontalScrollIndicator={false}
          />
        </ImageBackground>
        <TouchableOpacity style={styles.showresult} onPress={()=>handleSubmit()}>
          <View style={styles.iconview}>
            <Image source={require("@/assets/images/check.png")} />
          </View>
        </TouchableOpacity>
        <Text style={styles.icontext}>Show Result</Text>
        <View style={styles.secondaryContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.mainheading}>{selectname}</Text>
            <View style={styles.selectallbox}>
              <Text style={styles.textbox}>Select All</Text>
              <CheckBox style={styles.headingbox} 
              value={selectall}
               onValueChange={() => handleSelectAll(selectname)}/>
            </View>
          </View>
          <View style={styles.listcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                data={scheduleFilterItem}
                renderItem={renderSectionListItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.flatlistcontainer}
                showsHorizontalScrollIndicator={false}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      {loading && (
        <View style={styles.absoluteFill}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      )}
    </View>
  );
}
