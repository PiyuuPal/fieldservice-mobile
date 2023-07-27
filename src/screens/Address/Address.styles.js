import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        // backgroundColor:"red"
    },
    firstView: {
        flex: 1,
        backgroundColor: 'green'
    },
    custIcon: {
        padding: 15,
        color: '#041B3E'
    },
    headerTitle: {
        color: '#041B3E',
        fontFamily: font.bold,
        padding: spacing.s,
        fontSize: 18

    },
    txtFieldTitle: {
        color: '#041B3E',
        fontSize: 14,
        fontWeight: "600",
        fontFamily: font.bold
    },
    btn: {
        backgroundColor: '#041B3E',
         padding: 10,
        marginTop: spacing.s,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 60,
        height: 60, width: 60,
        alignSelf: 'center'
    },
    error: {
        color: "red",
     
        marginVertical: 5,
        // marginLeft: 50,
        fontSize: 16,
        color: "red",
        fontFamily: font.regular,
        textAlign: "center",
        alignSelf: "flex-start",
      },

})