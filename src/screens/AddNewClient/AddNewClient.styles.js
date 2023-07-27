import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        // backgroundColor: '#E6E6E6'
    },
    firstView: {
        flex: 1,
        // backgroundColor: 'green',
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
    secView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
       
        
    },
    txtFieldTitle: {
        color: '#041B3E',
        fontSize: 14,
        fontWeight: "600",
        fontFamily: font.bold
    },
    txtFieldView: {
        borderRadius: 8,
        borderColor: '#D5DBE4',
        borderWidth: 1,
        backgroundColor:'#FFFFFF',
        marginVertical:10,
        // shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.04,
        shadowRadius: 10,
        elevation: 4,
        
    },
    textboxfield: {
        fontFamily: font.regular,
        fontWeight: '600',
        width: '100%',
    },
    custIcon: {
        padding: 15,
        color: '#041B3E'
    },
    logInbutton: { alignItems: 'center', marginTop: spacing.xl },
    logInbuttonView: { backgroundColor: '#195190', height: 55, width: 55, borderRadius: 55 },
    logInbuttonIcon: { color: '#FFFFFF', alignSelf: 'center', margin: 17 },
    error: {
        color: 'red',
        fontFamily: font.regular
    },
});