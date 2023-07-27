import React, { useRef ,useEffect} from "react";
import { View, TouchableOpacity, Image, Text, ImageBackground,FlatList } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import { useNavigation } from "@react-navigation/native";
import RNFetchBlob from "rn-fetch-blob";
import {styles} from './InvoiceSignaturesStyles';
import { backgroundImage, search, backIcon } from '@/assets';
import { PermissionsAndroid } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
export const InvoiceSignatures = () => {
  const ref = useRef();
  const navigation = useNavigation();
  const invoiceSignature = useSelector(
    (state) => state?.user?.invoiceDetails?.invoiceSignature
  );
  console.log(invoiceSignature);
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
  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear =async () => {
   
    
  };

  const handleEnd = () => {
    console.log("handle end");
    ref.current.readSignature();
  };
  const renderItem = ({ item }) => {
    console.log("item is",item.file_name);
   return(
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ uri: item.file_name }} style={styles.image} />
    </TouchableOpacity>
   )
  };
  const handleSave = async (signature) => {
    //console.log("save clicked",signature);
   
      if ( PermissionsAndroid.RESULTS.GRANTED) {
      
        const dirs = RNFetchBlob.fs.dirs
        var image_data = signature.split('data:image/png;base64,');
        const filePath = dirs.DownloadDir+"/"+'signture'+new Date().getMilliseconds()+'.png'
        RNFetchBlob.fs.writeFile(filePath, image_data[1], 'base64')
        .then(() => {
          console.log("clear success!");
          console.log("Successfuly saved to"+ filePath)
        })
        .catch((errorMessage) =>{
          console.log(errorMessage)
        })      }
          
        if (Platform.OS ==='ios') {
        const dirs = RNFetchBlob.fs.dirs
        console.log(dirs)
        var image_data = signature.split('data:image/png;base64,');
        const filePath = dirs.DocumentDir+"/"+'signature'+new Date().getMilliseconds()+'.png'
        RNFetchBlob.fs.writeFile(filePath, image_data[1], 'base64')
        .then(() => {
              RNFetchBlob.ios.previewDocument("file://"+filePath)
              console.log("Successfully saved to"+ filePath)
                })
        .catch((errorMessage) =>{
          console.log(errorMessage)
        })
        }
    }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container1} source={backgroundImage}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backIcon} style={{ marginTop: 5 }} />
          </TouchableOpacity>
         <Text style={styles.headerTitle}   onPress={handleSave}>Add Signature</Text>
        </View>
      </ImageBackground>
    
      <SignatureScreen
      ref={ref}

      onOK={handleSave}
      onEmpty={handleEmpty}
      onClear={handleClear}
      
      autoClear={true}
      
    />
  <View>
   <FlatList
          data={invoiceSignature}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlist}
        />
        </View>
    </View>
  )
}