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
      txttitle: {
        marginLeft: 20,
        fontFamily: font.bold,
        fontSize: 20,
        textAlignVertical: 'center',
      },
      title: {
        fontSize: 16,
        marginBottom: 10,
      },
      quantityInput: {
        flexDirection: 'row',
        
        backgroundColor: 'white',
        borderRadius: 3,
        paddingVertical: 10,
        paddingHorizontal: 15,
       
        marginLeft:'auto',
        justifyContent:'space-around'
      },
      modifierButton: {
        padding: 10,
     
        alignItems: 'center',
        borderWidth:1,
       borderColor:'#D4DDE0',
        marginHorizontal:12,
      },
      modifierButtonText: {
        fontSize: 18,
        color: '#888',
       paddingHorizontal:5,
      },
      screenText: {
        textAlignVertical:'center',
        fontSize: 18,
        color:'black',
      },
      name:{
        color:'black',
        fontSize:22,
        marginLeft:20,
        marginTop:20,
        textTransform:'capitalize',
      }
      ,price:{
        fontSize:22,
        marginLeft:20,
        marginTop:15,
        color:'black',
      },
      quantitycontainer:{
     flexDirection:'row',
     marginTop:10,
     borderTopColor:'#D4DDE0',
     borderTopWidth:1,
     paddingTop:20,
      },
      button:{
        position:'absolute',
        bottom:30,
        alignSelf:'center',
        backgroundColor:'#195090',
        padding:20,
        borderRadius:70,
      },
      buttontext:{
        color:'white',
      }
});