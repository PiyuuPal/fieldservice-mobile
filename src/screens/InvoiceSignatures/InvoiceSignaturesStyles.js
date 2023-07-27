import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';
import { font } from '@/theme/font';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5F5F5'
        backgroundColor:'white',
    },
    container1: {
        height: 70,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 20,
      },
      headerTitle: {
        color: "#041B3E",
        fontFamily: font.bold,
        marginLeft:15,
        fontSize: 18,
        marginTop:2,
      },
      saveButton: {
        backgroundColor: 'deepskyblue',
        textAlign: 'center',
        fontWeight: '900',
        color: '#fff',
     
      },
      image:{
        width:150,
   height:150,
   borderWidth:2,
   borderColor:'black',
      },
      flatlist:{
        
     
      }
})