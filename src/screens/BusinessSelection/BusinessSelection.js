import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { styles } from './BusinessSelectionStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { NAVIGATION } from '@/constants';
import { businessList } from '@/actions/UserActions';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { NAVIGATION } from '@/constants';


export default function BusinessSelection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const buisnessListData = useSelector((state) => state?.business?.businessList);
  const firstname = useSelector((state) => state?.business?.userData?.firstname);
  const googleSignUp = useSelector((state)=>state?.business?.googleSignUpReducer);
  //console.log("name is",name);
  //console.log(buisnessListData);
  useEffect(() => {
    // 
    dispatch(businessList(navigation));
  }, []);
  const [filteredData, setFilteredData] = useState(buisnessListData);
  useEffect(() => {
    const filteredItems = buisnessListData?.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredItems);
  }, [buisnessListData, searchQuery]);
  //  useEffect(()=>{
  //  
  //  },[buisnessListData]);
  const handleSubmit = async () => {
    if (selectedItem) {
      try {
        await AsyncStorage.setItem("selectedItem", selectedItem);
        
      } catch (error) {
        
      }
    }
    navigation.navigate(NAVIGATION.BusinessWork);
  };

  const renderItem = ({ item }) => {
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }


    return (
      <TouchableOpacity
        style={[styles.item, selectedItem === item.id ? styles.selectedItem : null]}
        onPress={() => setSelectedItem(item.id)}
      >
        <View style={styles.iconbackground}>
          <Image
            source={{ uri: item.url }}
            style={styles.icon}
          />
        </View>
        <Image
          source={require('@/assets/images/check-icon.png')}
          style={[selectedItem === item.id ? styles.selectedItemicon : styles.notselecteditemicon]}
        />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@/assets/CreateProfile/signupbackground.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/imageslog/Vector.png')}
            style={styles.iconrightChevron}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          {googleSignUp ? <Text style={styles.heading}>Hi {googleSignUp?.data?.first_name} {googleSignUp?.data?.last_name}!</Text>:<Text style={styles.heading}>Hi {firstname}!</Text>}
          <Text style={styles.smallheading}>Tell Us More About Your Business</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <Feather name="search" size={25} style={styles.inputicon} />
          </View>

          <View style={styles.flatListContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                data={filteredData}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatList}
              />
            </ScrollView>
          </View>
        </View>

        <TouchableOpacity
          style={styles.logInbutton}
          onPress={() => handleSubmit()}
        >
          <View style={styles.logInbuttonView}>
            <Entypo name="arrow-right" size={20} style={styles.logInbuttonIcon} />
          </View>
          <Text style={[styles.txtFieldTitle, { fontSize: 16 }]}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
