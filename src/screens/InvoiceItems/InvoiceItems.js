import { backIcon, backgroundImage, noAvailableImg, search, state } from '@/assets';
import { HomeHeader } from '@/components/CustomHeaders/HomeHeader';
import { MessageHeader } from '@/components/CustomHeaders/MessageHeader';
import { shadow, spacing } from '@/theme';
import React, { useEffect, useState } from 'react';
import { drawer } from '@/assets';
import { font } from '@/theme/font';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ImageBackground, Image } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { invoiceItemDetail, invoiceItems, invoicesItemsList } from '@/actions/UserActions';
import { styles } from './InvoiceItems.styles';



export const InvoiceItems = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState('');
  const [searchText, setSearchText] = useState('');
  const invoicesListItems = useSelector((state) => state?.user?.listofInvoiceItems);
  // console.log('invoicesItems----->', invoicesListItems)

  const itemsInvoices = invoicesListItems;
  useEffect(() => {
    dispatch(invoicesItemsList())
  }, [listItem])

  const renderMessage = ({ item }) => {
    // console.log('ItemsIn-----', item?.item_name)
    if (searchText == '') {
      return (
        <TouchableOpacity style={styles.messageContainer}
          onPress={() => navigation.navigate('Quantity Items', { invoiceItemid: item.id })}
        // onPress={()=>console.log('kkkmkm--',{ invoiceItemid: item.id })}

        >
          {/* <View style={styles.itemContentView}>
          <Image source={noAvailableImg} style={styles.itemContentImg} />
        </View> */}
          <View style={styles.messageContent}>
            <Text style={styles.sender}>{item?.item_name}</Text>
            <Text style={styles.text}>${item?.price}</Text>

          </View>
        </TouchableOpacity>
      );
    }

    if (item?.item_name?.toLowerCase()?.includes(searchText?.toLowerCase())) {
      return (
        <TouchableOpacity style={styles.messageContainer}
          onPress={() => navigation.navigate('Quantity Items', { invoiceItemid: item.id })} >
          <View style={{ width: '100%', padding: 10, borderRadius: 5, borderColor: '#EEDEDE', borderWidth: 1 }}>
            <Text style={[styles.sender, { textAlign: 'center' }]}>{item?.item_name}</Text>
            {/* <Text style={styles.text}>${item?.price}</Text> */}
          </View>
        </TouchableOpacity>
      )
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground style={styles.container1} source={backgroundImage}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} style={{ marginTop: 5 }} />
            </TouchableOpacity>
            <Text style={styles.txttitle}>Items</Text>
            <Text style={[styles.txttitle, { marginLeft: 'auto', marginRight: 30 }]}>New</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={shadow.shadowImage}>
        <ImageBackground style={{ flexDirection: 'row', padding: 20 }} source={backgroundImage}>
          <View style={styles.viewInput}>
            <TextInput
              placeholder={'Search Items'}
              style={{ flex: 1 }}
              value={searchText}
              onChangeText={setSearchText}
            />
            <Image style={{ alignSelf: 'center' }} source={search} />
          </View>
        </ImageBackground>
      </View>
      <FlatList
        data={itemsInvoices}
        renderItem={renderMessage}
        // onPress={() => console.log(item.id)}

        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

