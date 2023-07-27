import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './BusinessWorkStyles';
import { useNavigation } from '@react-navigation/native';
import { businessdetails, numberList } from '@/actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from "react-native-vector-icons/Feather";
function RenderItem({ item, selectedItem, setSelectedItem }) {
  return (
  
    <TouchableOpacity
      style={[
        styles.item,
        selectedItem === item.id ? styles.selectedItem : null,
      ]} 
      onPress={() => setSelectedItem(item.id)}
    >
      <View style={styles.iconbackground}>
        <Image
          source={{ uri: item.url }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>{item.name}</Text>

      <Image
        source={require('@/assets/images/check-icon.png')}
        style={[selectedItem === item.id ? styles.selectedItemicon : styles.notselecteditemicon]}
      />

    </TouchableOpacity>
  );
}

export default function BusinessWork() {
  const [selectedItem, setSelectedItem] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const numberListData = useSelector((state) => state?.business?.numberList);
  const firstname = useSelector((state) => state?.business?.userData?.firstname);
  //
  useEffect(() => {
    dispatch(numberList(navigation));
  }, []);

  const retrieveData = async () => {

    const value = await AsyncStorage.getItem('selectedItem');

    
    return value;



  };
  let business_type;
  useEffect(() => {
    business_type = retrieveData('selectedItem');
  }, []);
  const handleSubmit = () => {
    const data = { "people_count": selectedItem, "business_type": business_type };
    dispatch(businessdetails(data, navigation));
  }
  const renderRemainingItems = () => {
    let remainingItems = [];
    if (numberListData) {
      remainingItems = numberListData.filter((item) => item.id !== 1);
    }


    return (
      <FlatList
        data={remainingItems}
        renderItem={({ item }) => (
          <RenderItem
            item={item}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@/assets/CreateProfile/signupbackground.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}
        style={{zIndex:1}}
        >

          <Image
            source={require('../../assets/imageslog/Vector.png')}
            style={styles.iconrightChevron}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Hi {firstname}!</Text>
            <Text style={styles.smallheading}>
              How many people work for your business?
            </Text>
            {numberListData && numberListData.length > 0 && (
              <View style={styles.row1}>
                <RenderItem
                  item={numberListData[0]}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
              </View>
            )}
            <View style={styles.row1}>{renderRemainingItems()}</View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.logInbutton}
          onPress={() => handleSubmit()}
        >
          <View style={styles.logInbuttonView}>
            <Image
              source={require('@/assets/images/check.png')}
              style={styles.logInbuttonIcon}
            />
          </View>
          <Text style={[styles.txtFieldTitle, { fontSize: 16 }]}>Done</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
