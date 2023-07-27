import { spacing } from '@/theme';
import { font } from '@/theme/font';
import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
    container:{
        flexGrow:1,
        // backgroundColor:'red'
    },
    firstView: {
       flex: 1,
        // backgroundColor: 'orange'
    },
    iconrightChevron: { marginTop: spacing.l, marginLeft: spacing.m, tintColor: '#195090' },
    wlcTextView: {
        alignItems: 'center',
        marginTop: spacing.l
    },
    wlcText: {
        color: '#195190',
        fontSize: 30,
        fontWeight: '700',
        fontFamily: font.bold
    },
    wlcsubtitleText: {
        color: '#A2A2A1',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: font.regular
    },
    secmainView: {
    marginHorizontal:20
    },
    secView: {
       flex: 1,
        // backgroundColor: 'pink',
        height:200,
        width:'100%',
        marginTop:spacing.l
        // marginTop: spacing.l,
        // // marginLeft:spacing.xl,
    },
    thirdView:{
        flex:1,
        marginTop:spacing.s,
        marginHorizontal:20,
        // backgroundColor:'yellow'
    },
    txtFieldTitle: {
        color: '#041B3E',
        fontSize: 14,
        fontWeight: "600",
        fontFamily: 'OpenSans_Condensed-Bold'
    },
    txtFieldView: {
        borderRadius: 8,
        borderColor: '#D5DBE4',
        borderWidth: 1
    },
    textboxfield: {
        fontFamily: "OpenSans_Condensed-Regular",
        fontWeight: '600',
        width:'100%',
    },
    custIcon: {
        padding: 15,
        color: '#041B3E'
    },
    rightIcon: {
        padding: 15,
        color: '#26A059',
        justifyContent: 'flex-end'
    },
    logInbutton: { alignItems: 'center', marginTop: spacing.xl },
    logInbuttonView: { backgroundColor: '#195190', height: 55, width: 55, borderRadius: 55 },
    logInbuttonIcon: { color: '#FFFFFF', alignSelf: 'center', margin: 17 },
})