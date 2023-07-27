import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Image,
  Modal,
  RefreshControl,
} from "react-native";
import { styles } from "./Home.styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { list, logout, TYPES } from "@/actions/UserActions";
import { spacing } from "@/theme";
import { ScrollView } from "react-native-gesture-handler";
import { HomeHeader } from "@/components/CustomHeaders/HomeHeader";
import { UpcomingList } from "./UpcomingList";
import { Dashboard } from "./Dashboard";
import { TopPerformingTechnicians } from "./TopPerformingTechnicians";
import {
  dashboardMenu,
  topTechnicians,
  upcomingListing,
} from "@/actions/HomeActions";
import { ModalLoader } from "@/components/ModalLoader";
import { Pusher } from "@pusher/pusher-websocket-react-native";
import { storeNotification } from "@/actions/JobActions";
const Home = ({ navigation }) => {
  const pusher = Pusher.getInstance();
  console.log("pusherout-->", pusher);
  const getsocialLogInUser = useSelector(
    (state) => state?.user?.googleLogInReducer?.data
  );
  console.log('home1---->',getsocialLogInUser?.email)
  const googleSignUp = useSelector(
    (state) => state?.business?.googleSignUpReducer?.data
  );
  console.log('home2---->',googleSignUp?.email)
  const loginName = useSelector((state) => state?.user?.data);
  console.log('home3---->',loginName?.email)
  const userName = useSelector((state) => state?.business?.userData);
  console.log('home4---->',userName?.email)
  const notifyEmail=loginName?.email?loginName?.email:getsocialLogInUser?.email?getsocialLogInUser?.email:userName?.email?userName?.email:googleSignUp?.email?googleSignUp?.email:null;
  // const getnotifyEmail =
  //   loginName?.email ||
  //   userName?.email ||
  //   googleSignUp?.email ||
  //   getsocialLogInUser?.email;
  console.log("--notif-->>>", notifyEmail);

  // {loginName ? () : getsocialLogInUser ? () : userName ? () : null}
  // (getsocialLogInUser?.email?getsocialLogInUser?.email:(userName?.email?userName?.email?googleSignUp?.email?googleSignUp?.email:null)));
  const [isFocus, setIsFocus] = useState(false);
  const [callNotify, setCallNotify] = useState("");
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  useEffect(() => {
    console.log("useeffectHOME-->");
    dispatch(upcomingListing());
    dispatch(topTechnicians(navigation));
    dispatch(dashboardMenu(navigation));
  }, [isFocus]);

  useEffect(() => {
    navigation.addListener(
      "focus",
      () => {
        setIsFocus(true);
        setTimeout(function () {
          setIsFocus(false);
        }, 5000);
        console.log("hy");
      },
      []
    );
  }, []);

  const disconnectNotify = async () => {
    await pusher.unsubscribe({ channelName: notifyEmail });
    await pusher.disconnect();
  };

  useEffect(() => {
    // installnotify();

    console.log(
      "pusherstatus--->",
      JSON.stringify(pusher?.connectionState) === '"DISCONNECTED"'
    );
    // console.log("pusher--->", JSON.parse(pusher?.connectionState).toLowerCase())
    const getstatusValue = JSON.stringify(pusher?.connectionState);
    setStatus(getstatusValue);
    console.log("status---->", pusher);
    if (
      JSON.stringify(pusher?.connectionState) === '"CONNECTED"' ||
      JSON.stringify(pusher?.connectionState) === '"DISCONNECTED"'
    ) {
      getNotification();
    }
    // if (status ==='"CONNECTED"') {
    // //   console.log("yes---------->")
    //   disconnectNotify();
    //   console.log("pusherifcondition-->", pusher)
    // }
    // if(status ==='"DISCONNECTED"'){
    //   // console.log("No------<")
    //   getNotification();
    // }
  }, [pusher]);

  const getNotification = async () => {
    // let counter=0;
    // console.log("counter----->",counter++)
    console.log("infunction->");
    await pusher.init(
      {
        app_id: "1617014",
        apiKey: "1404e9d0acda1cfa9b81",
        secret: "a0c1cfbf381dd4442d36",
        cluster: "ap2",
        useTLS: true,
      },
      console.log("pusherinit-->", pusher)
    );
    await pusher.unsubscribe({ channelName: notifyEmail });
    await pusher.connect();
    await pusher.subscribe({
      channelName: notifyEmail,
      onEvent: (PusherEvent) => {
        console.log("PusherEvent1234 ------------------->", PusherEvent?.data);
        const EventData = JSON.parse(PusherEvent?.data);
        const data = {
          message: EventData?.message,
          name: EventData?.name,
          jobId: EventData?.jobId,
          jobNotes: EventData?.jobNotes,
          showDate: EventData?.showDate,
          showTime: EventData?.showTime,
          type: EventData?.type,
        };
        let count = 0;
        console.log(count++, "<---message==>", data);
        // const data={"message":"has added a new note on Job #1012","name":"Claudia Love","jobId":"506","jobNotes":"helloprashad","showDate":"Tue Jul 11 2023","showTime":"07:41:AM","type":"job"}
        dispatch(storeNotification(data));
      },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader title={"Home"} />
        <View style={{ marginTop: -120 }}>
          <UpcomingList />
        </View>
        <View>
          <Text style={styles.headingDashboard}>Dashboard</Text>
          <Dashboard />
        </View>
        <View>
          <Text style={styles.headingDashboard}>Top Peforming Technicians</Text>
          <TopPerformingTechnicians />
        </View>
        <ModalLoader modalView={isFocus} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
