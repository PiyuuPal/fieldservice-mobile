import React, { Component, useState } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { shadow, spacing } from '@/theme';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { backgroundImage, bell, drawer, notifyNum, search } from '@/assets';
import { NAVIGATION } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Pusher } from "@pusher/pusher-websocket-react-native";
import { useEffect } from 'react';
import { GlobarSearch } from '@/screens/Home/GlobarSearch';

export function HomeHeader({ title }) {
  // const pusher = Pusher.getInstance();

  const dispatch = useDispatch();
  const notificationPusher = useSelector((state) => state?.job?.notifyData)
  console.log("notificationPusher1234----------->", notificationPusher)
  // console.log("userName--------->",getsocialLogInUser)
  const [closeModal, setCloseModal] = useState(false)
  // console.log("userName--------->",userName?.firstname)
  const getsocialLogInUser = useSelector((state) => state?.user?.googleLogInReducer?.data)
  const googleSignUp = useSelector((state) => state?.business?.googleSignUpReducer?.data)
  const userName = useSelector((state) => state?.business?.userData);
  const loginName = useSelector((state) => state?.user?.data);

  const navigation = useNavigation();
  useEffect(() => {
    console.log("closeModal==>", closeModal)
  }, [])
  // useEffect(() => {
  //   console.log("pusher--->", pusher)
  //   if (pusher) {
  //     console.log("pusherifcondition-->", pusher)
  //     getNotification();
  //   }
  // }, [pusher]);

  // const getNotification = async () => {
  //   console.log("infunction->")
  //   await pusher.init({
  //     // app_id:"1181116",
  //     // apiKey:"6c5755a17b720717b989",
  //     // secret:"68dd2b81ed9ae19451f2",
  //     // cluster:"ap2",
  //     app_id: '1617014',
  //     apiKey: '1404e9d0acda1cfa9b81',
  //     secret: 'a0c1cfbf381dd4442d36',
  //     cluster: 'ap2',
  //     useTLS: true,
  //   }, console.log("pusherinit-->", pusher));

  //   await pusher.connect();
  //   await pusher.subscribe({
  //     channelName:'business3@yopmail.com',
  //     onEvent: (PusherEvent) => {
  //       console.log("PusherEvent1234 ------------------->", PusherEvent?.data)
  //       const EventData = JSON.parse(PusherEvent?.data);
  //       const data = {
  //         message: EventData?.message,
  //         name: EventData?.name,
  //         jobId: EventData?.jobId,
  //         jobNotes: EventData?.jobNotes,
  //         showDate: EventData?.showDate,
  //         showTime: EventData?.showTime,
  //         type: EventData?.type
  //       }
  //       console.log("message==>", data)
  //       // const data={"message":"has added a new note on Job #1012","name":"Claudia Love","jobId":"506","jobNotes":"helloprashad","showDate":"Tue Jul 11 2023","showTime":"07:41:AM","type":"job"}
  //       // dispatch(notify(data))
  //     },
  //   });
  //   // await pusher.disconnect();
  // }

  function renderModal() {
    const transparent = 'rgba(0,0,0,0.5)'
    return (
      <View>
        <Modal visible={closeModal} animationType="slide" transparent={true} >
          <View style={{ flex: 1, backgroundColor: transparent }}>
            <GlobarSearch modalClose={setCloseModal} />
          </View>
        </Modal>
      </View>
    )
  }

  const searchModal = () => {
    console.log("modalValu--<", closeModal)
    setCloseModal(true)
  }
  return (
    <View>
      <ImageBackground style={[shadow.primary, { height: 200, flexDirection: 'row', paddingLeft: 20, paddingTop: 20 }]} source={backgroundImage}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
            <Image source={drawer} style={{ marginTop: 10 }} />
          </TouchableOpacity>
          {/* <EvilIcons style={{marginLeft:15}} name="user" size={50} onPress={() => { console.log("hy") }} /> */}
          {/* <View style={{ backgroundColor: '#ECECEC', height: 50, width: 50, borderRadius: 100, justifyContent: 'center', marginLeft: spacing.x }}>
            <Image source={{ uri: loginName?.user_image } ? { uri: loginName?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 100 }} />
          </View> */}
          {/* {getsocialLogInUser ? <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5, marginLeft: spacing.x }}>{getsocialLogInUser?.data?.firstname} {getsocialLogInUser?.data?.lastname}</Text> : <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5, marginLeft: spacing.x }}>{loginName?.firstname ? loginName?.firstname : userName?.firstname}{getsocialLogInUser?.data?.firstname} {getsocialLogInUser?.data?.lastname}</Text>} */}
          {loginName ? (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#ECECEC', height: 50, width: 50, borderRadius: 100, justifyContent: 'center', marginLeft: spacing.x }}>
                <Image source={{ uri: loginName?.user_image } ? { uri: loginName?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 100 }} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5, marginLeft: spacing.x }}>{loginName?.firstname ? loginName?.firstname : ''}</Text>
            </View>
          ) : getsocialLogInUser ? (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#ECECEC', height: 50, width: 50, borderRadius: 100, justifyContent: 'center', marginLeft: spacing.x }}>
                <Image source={{ uri: getsocialLogInUser?.user_image } ? { uri: getsocialLogInUser?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 100 }} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5, marginLeft: spacing.x }}>{getsocialLogInUser?.firstname ? getsocialLogInUser?.firstname : ''}</Text>
            </View>
          ) : userName ? (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#ECECEC', height: 50, width: 50, borderRadius: 100, justifyContent: 'center', marginLeft: spacing.x }}>
                <Image source={{ uri: userName?.user_image } ? { uri: userName?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 100 }} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5, marginLeft: spacing.x }}>{userName?.firstname ? userName?.firstname : ''}</Text>
            </View>
          ) : googleSignUp ? (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#ECECEC', height: 50, width: 50, borderRadius: 100, justifyContent: 'center', marginLeft: spacing.x }}>
                <Image source={{ uri: googleSignUp?.user_image } ? { uri: googleSignUp?.user_image } : noAvailableImg} style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 100 }} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5, marginLeft: spacing.x }}>{googleSignUp?.firstname ? googleSignUp?.firstname : ''}</Text>
            </View>
          ) : null}



        </View>
        <View style={{ paddingRight: 10 }}>
          <View style={{ flexDirection: "row" }}>
            {(notificationPusher?.length != 0 && notificationPusher != undefined) ?<View style={{marginTop:-8,backgroundColor:"#7DC05D",alignItems:"center",justifyContent:"center",borderRadius:50}}><Text style={{ color: "#FFFFFF", fontSize:12, fontWeight: '600',paddingHorizontal:9,paddingVertical:5 }}>{notificationPusher?.length}</Text></View>: ''}
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate(NAVIGATION.Notification)}>
              <Image source={bell} />
            </TouchableOpacity>
            <TouchableOpacity onPress={searchModal}>
              <Image source={search} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {renderModal()}
    </View>
  )
}
