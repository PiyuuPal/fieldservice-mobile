import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.l,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: '#195190',
    fontFamily:'OpenSans_Condensed-Regular',
    fontWeight:'700',
  },
  smallheading: {
    textAlign: 'center',
    fontFamily:'OpenSans_Condensed-Regular',
    fontSize: 15,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
  },
  inputicon: {
    marginHorizontal: 7,
    color: 'black',
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    fontFamily:'OpenSans_Condensed-Regular',
  },
  logInbutton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  logInbuttonView: {
    backgroundColor: '#195190',
    height: 55,
    width: 55,
    borderRadius: 55,
  },
  logInbuttonIcon: {
    color: '#FFFFFF',
    alignSelf: 'center',
   marginTop:'auto',
   marginBottom:'auto',
  },
  txtFieldTitle: {
    textAlign: 'center',
    fontWeight:'700',
  },
  item: {
   
    backgroundColor: '#EAEAEA',
    width:'45%',
    height:150,
    borderRadius: 100,
    marginHorizontal:10,
    marginVertical:8,
  //  paddingHorizontal:20,
  paddingVertical:25,
    
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color:'#041B3E',
   marginTop:5,
   fontFamily:font.bold,
  },
  flatList: {
    marginTop: 20,
    marginBottom: 20,
  },
  flatListContainer: {
    height: '70%',
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width:40,
    height:40,
    marginTop:'auto',
    marginBottom:'auto',
  },
  iconbackground:{
    width:55,
    height:55,
    marginLeft:'auto',
    marginRight:'auto',
   backgroundColor:'white',
   borderRadius:100,
  },
  selectedItem: {
    backgroundColor:'#F1F8FF',
  },
  row1:{
    flexDirection:'row',
    // backgroundColor:'red',
    justifyContent:'center',
    marginVertical:0,
    marginHorizontal:10,
  },
  iconrightChevron: {position:'absolute', marginTop: spacing.l, marginLeft: spacing.m, tintColor: '#195090' },
  singleColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  twoColumns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notselecteditemicon:{
    display: 'none'
  },
  selectedItemicon:{
   position:'absolute',
   right:20,
   top:10,
  },
});