import { spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container:{
    flex: 1, 
   
},
ScrollView:{
 padding: spacing.l
},
 heading:{
    textAlign:'center',
    fontSize:30,
    color:'#195190',  
    fontFamily: 'OpenSans_Condensed-Regular',
    fontWeight:'700'
 },
 smallheading:{
    textAlign:'center',
    fontFamily:'OpenSans_Condensed-Regular',
 },
 uploadimagecontainer:{
    marginLeft:'auto',
    marginRight:'auto',
   
    marginTop:10,
 },
 uploadimagebutton:{
    marginLeft:'auto',
    marginRight:'auto',
    padding:30,
    borderRadius:100,
 },
 boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
    }),
    backgroundColor: '#fff',
  },
  uploadimagelabel:{
    textAlign:'center',
    marginTop:20,
    fontSize:17,
    fontFamily:'OpenSans_Condensed-Regular',
  },
  label:{
    color:'black',
    fontWeight:'700',
    marginTop:20,
    fontFamily:'OpenSans_Condensed-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
    paddingVertical: 5,
    marginTop:5,
    borderRadius:10,
  },
  inputicon: {
   
    marginHorizontal:7,
    color:'black'
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    fontFamily:'OpenSans_Condensed-Regular',
  },
  selectdate:{
   paddingVertical:14,
  },
  dateofbirthicon:{
   marginLeft:'auto',
   padding:8,
   backgroundColor:'#195090',
   color:'white',
   borderRadius:100,
  },
  logInbutton: { alignItems: 'center', marginTop: spacing.xl },
    logInbuttonView: { backgroundColor: '#195190', height: 55, width: 55, borderRadius: 55 },
    logInbuttonIcon: { color: '#FFFFFF', alignSelf: 'center', margin: 17 },
    errorText:{
      color:'red'
    },
    iconrightChevron: { marginTop: spacing.l, marginLeft: spacing.m, tintColor: '#195090' },
})