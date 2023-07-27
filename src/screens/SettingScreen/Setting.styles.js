import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    firstView: {
        flex: 1,
        // backgroundColor: 'green'
      },
      custIcon: {
        padding: 15,
        color: "#195090",
      },
      headerTitle: {
        color: "#041B3E",
        fontFamily: font.bold,
        padding: spacing.s,
        fontSize: 18,
      },
      
      

});
