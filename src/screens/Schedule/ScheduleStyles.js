import { backgroundImage } from '@/assets';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 8,
    marginBottom: 8,
  },
  itemContent: {
    flexDirection: 'column',
  },
  itemHeader: {
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily:font.regular,
  },
  itemStatus: {
    fontSize: 14,
    color: 'gray',
    fontFamily:font.regular,
  },
  itemInfo: {
    fontSize: 14,
    padding: 10,
    marginTop: 'auto',
    color: '#041B3E',
    fontFamily:font.regular,
  },
  text: {
    color: '#041B3E',
   textAlignVertical:'center',
   marginLeft:10,
    fontSize: 16,
    fontFamily:font.regular,
  },
  textcontainer:{
  flexDirection:'row',
  marginVertical:5,
  
  paddingVertical:5,
  },
  calendarheaderstyle: {
    marginTop: 0,
    elevation: 10, // Adjust the elevation value as per your preference
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.1,
    shadowRadius: 60,
  },
  calendarstrip: {
    height: 120,
    backgroundColor:'transparent',
  
  },

  date: {
  
    marginLeft: 20,
    marginTop: 30,
   
    fontSize: 16,
    color: 'black',
    fontFamily:font.regular,
  },
  businessheading: {
    fontSize: 12,
    position: 'absolute',
    color: 'white',
    position: 'absolute',
    top: -35,
    left: 10,
    paddingHorizontal: 14,
    backgroundColor: '#195090',
    paddingVertical: 5,
    borderRadius: 50,
  },
  list: {
    padding: 15,
    paddingTop: 10,
  },
  image:{
    marginTop:'auto',
    marginLeft:10,
    marginRight:10,
},
  time: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    borderRadius: 50,
    fontSize: 12,
    color: '#757588',
    fontFamily:font.regular,
  },
  dotsicon: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
  jobtime: {
    marginLeft: 'auto',
    marginRight: 10,
    color: '#757588',
    fontFamily:font.regular,
  },
  status: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 30,
    marginLeft: 'auto',
    color: 'black',
    fontFamily:font.regular,
  },
  icon: {
    marginBottom: 'auto',
    marginTop: 'auto',
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  icon1:{
    marginLeft:10,
  }
});
