import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';
import { font } from '@/theme/font';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dateTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    // backgroundColor:'red'
  },
  datecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  dateheading: {
    color: '#041B3E',
    fontWeight: '600',
    marginLeft: 10,
    fontFamily: font.regular,
  },
  image: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
  },
  text: {
    paddingVertical: 15,
    color: 'black',
    marginLeft: 10,

    fontFamily: font.regular,
  },
  datebox: {
    padding: 5,
    marginTop: 5,

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4EFF2',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 6,
  },
  horizontalLine: {
    backgroundColor: '#E4EFF2',
    height: 2,
    width: '90%',
    marginTop: 7,
    alignSelf: 'center',
  },
  verticalLine: { backgroundColor: '#8C8C8C', height: 25, width: 1, marginTop: 7 },
  txtBtn: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4EFF2',
    borderRadius: 15,
    shadowColor: '#000',
    fontFamily: font.regular,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.04,
    shadowRadius: 15,
    elevation: 2,
    flexDirection: 'row',
    padding: 15,
  },
  txtStyle: {
    color: '#110C03',
    fontWeight: '400',
    fontSize: 18,
    fontFamily: font.regular,
  },
  btnStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  optionheading: {
    color: 'black',
    marginLeft: 20,
    marginTop: 30,
    fontSize: 18,
    marginBottom: -10,
    fontFamily: font.regular,
  },
  savebutton: {
    padding: 20,
    backgroundColor: '#195090',
    borderRadius: 70,
    fontFamily: font.regular,
  },
  savetext: {
    color: '#195090',
    
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    fontFamily: font.regular,
  },
});
