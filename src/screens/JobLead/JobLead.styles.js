import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E6E6E6',
    },
    firstView: {
        flex: 1,
        backgroundColor: 'green'
    },
    custIcon: {
        padding: 15,
        color: '#195090'
    },
    headerTitle: {
        color: '#041B3E',
        fontFamily: font.bold,
        padding: spacing.s,
        fontSize: 18

    },
    searchView: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, borderWidth: 1, borderColor: '#D5DBE4', borderRadius: 8 },
    textboxfield: {
        fontFamily: font.regular,
        fontWeight: '600',
        fontSize:14,
        padding: spacing.xii
    },
    imgIcon:{marginRight:10,marginTop:10}
,    secView: {
        flex: 1,
        // backgroundColor:'#E6E6E6'
    },
    clientDetailView:{ flexDirection: "row",marginTop:spacing.x },
    txtClient:{
        fontFamily:font.regular,
        fontSize:14,
        color:'#757588',
    },
    txtFieldView: {
        borderRadius: 15,
        borderColor: '#E4EFF2',
        borderWidth: 1,
        marginTop:spacing.x,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 2,
        // // elevation: 1
    },
    txtName:{
        color:'#041B3E',
        fontFamily:font.bold,
        fontSize:17,
        fontWeight:'600'
    },
    txtwithIcon:{
        color:'#195090'
    },
    txtClientDetail:{
        color:'#757588',
        fontFamily:font.medium,
        fontSize:16,
        marginLeft:spacing.x
    },
    textName:{
        color:'#041B3E',
        fontFamily:font.medium,
        fontSize:18,
       padding:spacing.x
    },
    headerJobTitle: {
        color: '#041B3E',
        fontFamily: font.bold,
        fontSize: 18
    },
    thirdView: {
        flex: 1,
        // backgroundColor: 'yellow'
    },
    logbtn: {
        backgroundColor: '#195190',
        alignSelf: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 20,
        marginTop: 25,
    },
    loginButton:{ 
        // fontWeight: '700', 
        fontSize: 20, 
        color: '#041B3E', 
        textAlign: 'center',
        fontFamily:"OpenSans_Condensed-Bold"
     },
    headersubTitle: {
        color: '#041B3E',
        fontFamily: font.regular,
        // padding:spacing.s,
        marginTop: 20,
        fontSize: 14

    }
})