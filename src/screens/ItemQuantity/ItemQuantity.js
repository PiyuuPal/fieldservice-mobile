import React, { useState,useEffect } from 'react';
import { backgroundImage, search } from '@/assets';
import { HomeHeader } from '@/components/CustomHeaders/HomeHeader';
import { MessageHeader } from '@/components/CustomHeaders/MessageHeader';
import { shadow, spacing } from '@/theme';
import {drawer,backIcon} from '@/assets';
import { font } from '@/theme/font';
import {styles} from './ItemQuantityStyles';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput,SafeAreaView ,ImageBackground,Image} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NAVIGATION } from '@/constants';
export const ItemQuantity=({ route })=>{
    const { item } = route.params;
    //
    const navigation=useNavigation();
    const [value, setValue] = useState(0);
    useEffect(() => {
   
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
  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
  };
 return(
    <SafeAreaView style={styles.container}>
     <View style={styles.container}>
        <ImageBackground style={styles.container1} source={backgroundImage}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} style={{ marginTop: 5 }} />
            </TouchableOpacity>
           
            
          </View>
        </ImageBackground>
        <View>
           
        <Text  style={styles.name}>{item.name}</Text>
     <View style={styles.quantitycontainer}>
     <Text  style={styles.price}>${item.price}</Text>
      <View style={styles.quantityInput}>
        <TouchableOpacity style={styles.modifierButton} onPress={decrement}>
          <Text style={styles.modifierButtonText}>&mdash;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modifierButton} >
          <Text style={styles.modifierButtonText}>{value}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modifierButton} onPress={increment}>
          <Text style={styles.modifierButtonText}>&#xff0b;</Text>
        </TouchableOpacity>
      </View>
    </View>
        </View>
        {value >= 1 && (
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(NAVIGATION.CreateInvoice)}>
            <Text style={styles.buttontext}>
              Continue
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
 )
}