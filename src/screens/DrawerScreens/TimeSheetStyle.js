import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const timeStyle = StyleSheet.create({
    timesheetHead: {
        fontSize: 18,
        fontWeight: '700',
        color: '#041B3E',
        marginLeft: 20
    },
    dayweakMon: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "#D2DDE9",
        borderWidth: 1,
        // backgroundColor: '#E5F1FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 15
    },
    txtMon: {
        color: '#041B3E',
        fontSize: 15,
        fontWeight: '600'
    },
    txtDateShow: {
        fontSize: 16,
        fontWeight: '700',
        color: '#195090'
    },
    txtView:{
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: "space-between",
        width:'100%',
        paddingHorizontal:15
    },
    totaltxt:{
        fontWeight:"700",
        fontSize:18,
        color:"#FFFFFF"
    },
    fromto:{
        fontSize:14,
        fontWeight:'700',
        color:"#9090A0"
    },
    txtbtnclock:{
        fontSize:17,
        fontWeight:'600',
        color:"#041B3E",
        marginHorizontal:3
    },
    touchClock:{
        backgroundColor:"white",
        padding:10,
        borderRadius:50,
        elevation:20,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center"
    },
    totalView:{
        backgroundColor: '#195090', 
        justifyContent: 'space-between', 
        padding: 15, 
        alignItems: 'center', 
        flexDirection: "row"
    },
    txtfrom:{
        fontSize:16,
        fontWeight:"600",
        color:"#041B3E"
    }

})