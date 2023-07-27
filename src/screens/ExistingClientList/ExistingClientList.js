import { exisitngClientListFun, storeClientData } from '@/actions/UserActions'
import { search, backgroundImage, cyberwolf, noAvailableImg, phoneCall, job, invoices, estimatesIcon } from '@/assets'
import { ClientHeader } from '@/components/CustomHeaders/ClientHeader'
import { HomeHeader } from '@/components/CustomHeaders/HomeHeader'
import { shadow, spacing } from '@/theme'
import { font } from '@/theme/font'
import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView, Text, View, FlatList, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { NAVIGATION } from '@/constants';
import { ModalLoader } from '@/components/ModalLoader';


export function ExistingClientList({ navigation }) {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const existClientListData = useSelector((state) => state?.user?.existClientListReducer?.clientDetails);
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const phoneNumber = existClientListData?.phone;
  const openDialer = (item) => {
    // 
    let phoneNumberWithPrefix = '';
    if (Platform.OS === 'android') {
      phoneNumberWithPrefix = `tel:${item?.phone}`;
    } else {
      phoneNumberWithPrefix = `telprompt:${item?.phone}`;
    }
    Linking.openURL(phoneNumberWithPrefix);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      setIsFocus(true)
      setTimeout(function () {
        setIsFocus(false)
      }, 2000);
    }, []);
    let data ={
      page:1,
      limit:10,
    }
    // console.log(']]]]]---',data)
    dispatch(exisitngClientListFun(data,navigation));
  }, [isFocus]);



  const sendItem = (item) => {
    // console.log("idsend-->", item)
    dispatch(storeClientData(item, navigation))
  }

  const showModal = (item) => {
    // 
    setSelectedItem(item);
    setModalVisible(true);
  };

  const filterData = (item) => {
    if (userInput === "") {
      return (
        <View style={{ justifyContent: 'space-between', marginTop: 5, backgroundColor: 'white', borderRadius: 10, }}>
          <TouchableOpacity style={styles.txtFieldView}
            onPress={() => navigation.navigate("Client Edit", sendItem(item))}  >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.imgView}>
                <Image
                  source={noAvailableImg}
                  style={{ height: 25, width: 25, alignSelf: 'center', margin: 5 }}
                />
              </View>
              <Text style={styles.txtFieldTitle}>{item?.first_name} {item?.last_name}</Text>
              <Entypo name="dots-three-vertical" size={20} style={styles.custIcon} onPress={() => showModal(item)} />
            </View>
          </TouchableOpacity>

        </View>
      )
    }
    if (item?.first_name?.toLowerCase()?.includes(userInput?.toLowerCase())) {
      return (
        <TouchableOpacity style={[styles.txtFieldView, { marginVertical: 2 }]}
          onPress={() => navigation.navigate("Client Edit", sendItem(item))}
        >
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.imgView}>
              <Image
                source={noAvailableImg}
                style={{ height: 25, width: 25, alignSelf: 'center', margin: 5 }}
              />
            </View>
            <Text style={[styles.txtFieldTitle, { marginLeft: 10 }]}>{item?.first_name != undefined ? item?.first_name : ''} {item?.last_name != undefined ? item?.last_name : ''}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }


  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"white" }}>
      <ClientHeader title={'Clients'} />
      <View style={{overflow:'hidden',paddingBottom:20}}>
      <View>
        <ImageBackground
          style={[shadow.primaryView,{ flexDirection: 'row', padding: 20 ,elevation:12}]} 
          source={backgroundImage}>
          <View style={styles.viewInput}>
            <TextInput placeholder={'Search Clients'} onChangeText={(text) => setUserInput(text)} style={{ flex: 1 }} />
            <Image style={{ alignSelf: 'center' }} source={(search)} />
          </View>
        </ImageBackground>
      </View>
      </View>
      <View style={{
        flex: 1,
        padding: spacing.s
      }}>
        {/* <View>
          <TextInput  onChangeText={(text) => setUserInput(text)} style={{ backgroundColor: 'white', borderWidth: 1, marginVertical: 10, borderRadius: 5, borderColor: 'gray' }} placeholder={"search client name"} />
        </View> */}
        {existClientListData ? <Text style={styles.headerTitle}>All Clients</Text> : <View style={styles.noClientAvailable}>
          <Text style={styles.noClientText}>No Clients Available</Text>
        </View>}
        <FlatList data={existClientListData}

          renderItem={({ item, index }) => filterData(item)} showsVerticalScrollIndicator={false}></FlatList>
        {/* <View style={{marginBottom:100}}></View> */}
      </View>

      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
      <Modal
        isVisible={modalVisible}
        animationType="slide" transparent={true}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection={['down']}
        onSwipeComplete={() => setModalVisible(false)}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        {selectedItem ? <View style={{ height: 370, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <Ionicons name='close' size={25} color={'#041B3E'} style={{ padding: spacing.x, marginLeft: 5 }} onPress={() => setModalVisible(false)} />
            <View style={styles.modalsideView} >
              <TouchableOpacity style={styles.btnTouchView} onPress={openDialer}>
                <Image source={phoneCall} style={{ marginTop: spacing.s }} />
                <Text style={styles.modalText}>Call {selectedItem?.first_name} {selectedItem?.last_name}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalEmpView}></View>
            <View style={styles.modalsideView}>
              <TouchableOpacity style={styles.btnTouchView}
                onPress={() => navigation.navigate(NAVIGATION.chatBoard)}
              >
                <Image source={job} style={{ marginTop: spacing.s }} />
                <Text style={styles.modalText}>Send Message</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalEmpView}></View>
            <View style={styles.modalsideView}
              onPress={() => navigation.navigate(NAVIGATION.chatBoard)}
            >
              <TouchableOpacity style={styles.btnTouchView} onPress={() =>
                navigation.navigate('Job Create', { clientId: selectedItem.id, type: 'client' })
              }>
                <Image source={job} style={{ marginTop: spacing.s }} />
                <Text style={styles.modalText}>Schedule a job</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalEmpView}></View>
            <View style={styles.modalsideView}>
              <TouchableOpacity style={styles.btnTouchView} onPress={() =>
                navigation.navigate('Create Invoice', { clientId: selectedItem.id, type: 'client' })}
              >
                <Image source={invoices} style={{ marginTop: spacing.s }} />
                <Text style={styles.modalText}>Create Invoice</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalEmpView}></View>
            <View style={styles.modalsideView}>
              <TouchableOpacity style={styles.btnTouchView} >
                <Image source={estimatesIcon} style={{ marginTop: spacing.s }} />
                <Text style={styles.modalText}>Create Estimate</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: spacing.s }}></View>
          </ScrollView>
        </View> : null}


      </Modal>
      {/* </View> */}
      <ModalLoader modalView={isFocus} />
    </SafeAreaView>

  )
}
export const styles = StyleSheet.create({
  viewInput: {
    borderWidth: 1,
    borderColor: "#D5DBE4",
    flexDirection: 'row',
    width: '100%',
    paddingRight: 10,
    borderRadius: 10
  },
  headerTitle: {
    color: '#041B3E',
    fontFamily: font.regular,
    fontWeight: '600',
    padding: spacing.s,
    fontSize: 15

  },
  txtFieldView: {
    padding: spacing.s,
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    borderRadius: 8,
    borderColor: '#D5DBE4',
    borderWidth: 1,

  },
  noClientAvailable: { backgroundColor: '#ECECEC', height: 150, width: 300, borderRadius: 10, justifyContent: 'center', alignSelf: 'center', },
  noClientText: { textAlign: 'center', color: '#195090', fontSize: 18 },
  txtFieldTitle: {
    color: '#041B3E',
    fontSize: 16,
    fontWeight: "600",
    fontFamily: font.bold,
    alignSelf: 'center'
  },
  custIcon: {
    // padding: 15,
    color: '#041B3E',
    alignSelf: 'center'
  },
  imgView: { backgroundColor: '#ffffff', borderRadius: 50, height: 35, width: 35, borderWidth: 1, borderColor: "#D5DBE4" },
  modalView: {
    backgroundColor: '#FFFFFF',
    height: 100, width: 150,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 8,
    borderColor: '#E2F3FF',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 4,

  },

  modalText: {
    // textAlign: 'center',
    padding: spacing.s,
    fontFamily: font.regular,
    fontSize: 15,
    fontWeight: '700',
    color: '#000000'
  },
  modalEmpView: {
    backgroundColor: 'grey',
    height: 1,
    width: '100%',
    alignSelf: 'center'
  },
  modalsideView:
  {
    flexDirection: 'row',
    padding: 8,
    marginLeft: spacing.x,
    //  backgroundColor: 'red' 
  },
  btnTouchView: {
    flexDirection: 'row',
    // padding: 10,
    //  marginLeft: spacing.x,
    // backgroundColor:'red'
  }

})