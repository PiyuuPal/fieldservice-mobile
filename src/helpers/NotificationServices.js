
// import { notificationPusher } from "@/actions/JobActions";
// import Pusher from "@pusher/pusher-websocket-react-native";
// import { useEffect } from "react";

// export const  NotificationServices =async(pusher)=>{
// // const pusher = Pusher.getInstance()

// //   const getNotification = async () => {
//     console.log("infunction->")
//     await pusher.init({
//       // app_id:"1181116",
//       // apiKey:"6c5755a17b720717b989",
//       // secret:"68dd2b81ed9ae19451f2",
//       // cluster:"ap2",
//       app_id:'1617014',
//       apiKey:'1404e9d0acda1cfa9b81',
//       secret:'a0c1cfbf381dd4442d36',
//       cluster:'ap2',
//       useTLS:true,
//     },console.log("pusherinit-->",pusher));

//     await pusher.connect();
//     await pusher.subscribe({
//       channelName:'business3@yopmail.com',
//       onEvent:(PusherEvent) => {
//         console.log("PusherEvent1234 ------------------->",PusherEvent?.data)
//         // const data={"message":"has added a new note on Job #1012","name":"Claudia Love","jobId":"506","jobNotes":"helloprashad","showDate":"Tue Jul 11 2023","showTime":"07:41:AM","type":"job"}
//         dispatch(notificationPusher(PusherEvent?.data))
//       },
//     });
//     // await pusher.disconnect();
// //   }
// }
