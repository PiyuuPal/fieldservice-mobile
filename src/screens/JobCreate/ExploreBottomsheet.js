import { clientIcon, estimatesIcon, invoices, job, leads, phoneCall, team } from '@/assets';
import { NAVIGATION } from '@/constants';
import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const ExploreBottomsheet = (props) => {
   const [visible, setVisible] = useState(false);
   const bottomRef = useRef(null);
   const navigation = useNavigation();
   const [modalVisible, setModalVisible] = useState(true);
   // console.log("props------>",props?.closeModal)
   // const showModal = () => {
   //    setModalVisible(!modalVisible);
   // };

   const closeAllModal = () => {
      props?.closeModal(false)

      setModalVisible(false);
   }
   return (

      // <SafeAreaView
      //    style={{ flex: 1, backgroundColor:'red' }}>
      //    <TouchableOpacity onPress={()=>showModal()}>
      //    <Text>kmnkjnkj</Text>
      //    </TouchableOpacity>

      <Modal
         isVisible={modalVisible}
         animationType="slide" transparent={true}
         onBackdropPress={() => setModalVisible(false)}
         swipeDirection={['down']}
         onRequestClose={() => setModalVisible(false)}
         onSwipeComplete={() => setModalVisible(false)}
         style={{ justifyContent: 'flex-end', margin: 0, }}
      >
         <View style={{ height: 370, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
               <TouchableOpacity onPress={closeAllModal}>
                  <View style={{ height: 4, width: '10%', backgroundColor: 'grey', alignSelf: 'center', marginTop: 5, borderRadius: 5 }}  ></View>
               </TouchableOpacity>
               <Ionicons name='close' size={25} color={'#041B3E'} style={{ padding: spacing.x, marginLeft: 5 }} onPress={() => closeAllModal(false)} />
               <Text style={[style.headerTitle, { textAlign: 'center' }]}>Create</Text>
               <TouchableOpacity style={style.bottomView} onPress={() => navigation.navigate(NAVIGATION.jobcreate, closeAllModal(false))}>
                  <Entypo name="tools" size={18} style={style.custIcon} />
                  <Text style={style.headerTitle}>Jobs</Text>
               </TouchableOpacity>

               {/* <TouchableOpacity style={[style.bottomView, { marginTop: spacing.x }]} onPress={() => navigation.navigate(NAVIGATION.jobLead, setModalVisible(false))}>
                  <Image
                     source={leads}
                     style={style.profileicon}
                  />
                  <Text style={style.headerTitlee}>Lead</Text>
               </TouchableOpacity> */}

               <TouchableOpacity style={[style.bottomView, { marginTop: spacing.x }]} onPress={() => navigation.navigate(NAVIGATION.jobInvoices, closeAllModal(false))}>
                  <Image
                     source={invoices}
                     style={style.profileicon}
                  />
                  <Text style={style.headerTitlee}>Invoice</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[style.bottomView, { marginTop: spacing.x }]} onPress={() => navigation.navigate(NAVIGATION.jobEstimates, closeAllModal(false))}>
               <Image
                     source={estimatesIcon}
                     style={style.profileicon}
                  />
                  <Text style={style.headerTitle}>Estimate</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[style.bottomView, { marginTop: spacing.x }]} onPress={() => navigation.navigate(NAVIGATION.addNewClient, closeAllModal(false))}>
               <Image
                     source={team}
                     style={style.profileicon}
                  />
                  <Text style={style.headerTitle}>Client</Text>
               </TouchableOpacity>
               <View style={{ marginBottom: spacing.s }}></View>
            </ScrollView>
         </View>
      </Modal>
      //  </SafeAreaView>
   );
};

export default ExploreBottomsheet;

const style = StyleSheet.create({
   container: {

   },
   bottomView: {
      flexDirection: 'row',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E4EFF2',
      marginHorizontal: spacing.x
      // borderColor: 'red',

   },
   custIcon: {
      padding: 15,
      color: '#195090'
   },
   headerTitle: {
      color: '#041B3E',
      fontFamily: font.bold,
      padding: spacing.x,
      fontSize: 18

   },
   headerTitlee: {
      color: '#041B3E',
      fontFamily: font.bold,
      padding: spacing.x,
      fontSize: 18,
      marginLeft: spacing.x

   },
   profileicon: {
      backgroundColor: '#F2F4F6',
      alignSelf: 'center',
      padding: spacing.x,
      marginLeft: spacing.s

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
      padding: 10,
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






