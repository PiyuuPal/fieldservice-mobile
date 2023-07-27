import { StyleSheet } from 'react-native';
import { font } from '@/theme/font';
import { spacing } from '@/theme';
export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    custIcon: {
        padding: 15,
        color: '#195090'
      },
      firstView:{
        flex:1,
      },
      headerTitle: {
        color: '#041B3E',
        fontFamily: font.bold,
        padding: spacing.s,
        fontSize: 18
    
      },
      items:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
      },
      addbutton:{
        backgroundColor:'#195090',
        width:'70%',
        padding:20,
        borderRadius:70,
      },
      addbuttontext:{
        color:'white',
      },
      ortext:{
        color:'black',
        marginVertical:10,
        fontSize:16,
      },
      textbox:{
        width:'70%',
        borderWidth:2,
        padding:20,
        borderRadius:10,
      },
      flatlist:{
        width:'70%',
        height:'30%',
      
      },
      nameview:{
        padding:20,
        backgroundColor:'white',
        zIndex:99,
        flexDirection:'row',
      },
      createbutton:{
       position:'absolute',
       bottom:30,
       alignSelf:'center',
       zIndex:1,
       padding:20,
       borderRadius:70,
       backgroundColor:'#195090',
      },
      createbuttontext:{
        color:'white',
      },
   
});