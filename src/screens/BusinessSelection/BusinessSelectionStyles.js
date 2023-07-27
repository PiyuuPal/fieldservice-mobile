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
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontFamily:'OpenSans_Condensed-Regular',
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
    
    bottom:50,
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
    margin: 17,
  },
  txtFieldTitle: {
    textAlign: 'center',
    fontFamily:'OpenSans_Condensed-Regular',
  },
  item: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 5,
    marginVertical:5,
    paddingTop:24,
    paddingBottom:15,
  },
  title: {
    fontSize: 13,
   fontWeight:'600',
    textAlign: 'center',
    color:'#041B3E',
    fontFamily:font.bold,
    marginTop:5,
  },
  flatList: {
    marginTop: 20,
    marginBottom: 20,
  },
  flatListContainer: {
    height: '69%',
    marginVertical:5,
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
    width:60,
    height:60,
    marginLeft:'auto',
    marginRight:'auto',
   backgroundColor:'white',
   borderRadius:100,
  },
  selectedItem: {
   backgroundColor:'#F1F8FF',
   
  },
  notselecteditemicon:{
    display: 'none'
  },
  selectedItemicon:{
   position:'absolute',
   right:20,
   top:10,
  },
  iconrightChevron: {position:'absolute', marginTop: spacing.l, marginLeft: spacing.m, tintColor: '#195090' },
});