import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#E6E6E6',
  },
  firstView: {
    // flex:1,
    // backgroundColor:'red',
  },
  custIcon: {
    padding: 15,
    color: '#195090'
  },
  custIconn: {
    // padding: 15,
    color: '#195090'
  },
  headerTitle: {
    color: '#041B3E',
    fontFamily: font.bold,
    padding: spacing.s,
    fontSize: 18

  },
  searchView: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, borderWidth: 1, borderColor: '#D5DBE4', borderRadius: 8 },
  textboxfield: {
    fontFamily: font.regular,
    fontWeight: '600',
    fontSize: 14,
    padding: spacing.xii
  },
  imgIcon: { marginRight: 10, marginTop: spacing.x },
  dashbtn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D2DDE9',
    padding: 10,
    // margin:5
    // width:'30%'
  },
  textTitle: { color: '#041B3E', textAlign: 'center', fontFamily: font.regular },
  secView: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: spacing.x
  },
  card: {
    // backgroundColor: '#EAECFA',
    marginTop: spacing.xii,
    marginHorizontal: spacing.s,
    borderWidth: 2,
    borderColor: '#E4EFF2',
    borderRadius: 20,
  },
  cardcontainer: {
    padding: 15,
    paddingTop: 30,
    borderRadius: 10,
  },
  txtheader: {
    color: 'white',
    fontWeight: "bold",
    borderRadius: 10,
    alignSelf: "flex-end",
    marginTop: -55,
    // paddingTop: 2,
    // paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10
  },
  jobDetails: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: '#041B3E',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    fontFamily: font.bold
  },
  jobDetails: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileicon: {
    backgroundColor: '#F2F4F6',
    alignSelf: 'center'
  },
  fullname: {
    textAlignVertical: 'center',
    marginLeft: spacing.x,
    fontSize: 15,
    fontFamily: font.regular,
    color: '#041B3E',

  },
  dueDate: {
    textAlignVertical: 'center',
    marginLeft: spacing.x,
    fontSize: 15,
    fontFamily: font.regular,
    color: '#757588',
  },
  jobDescription: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    // borderRadius: 140,
    // backgroundColor: 'white',
    alignSelf: "flex-end",
    color: "#041B3E",
    fontWeight: '700',
    fontSize: 16
  },
  jobDetails: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgView: {
    borderRadius: 50,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#E4EFF2',
    borderWidth: 2,
    padding: 4,
    width: 35,
  },
  txtFieldView: {
    padding: spacing.s,
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    borderRadius: 8,
    borderColor: '#D5DBE4',
    borderWidth: 1,
    marginHorizontal: spacing.x

  },
  txtFieldTitle: {
    color: '#041B3E',
    fontSize: 16,
    fontWeight: "600",
    fontFamily: font.bold,
    textAlign: 'center'
    // alignSelf: 'center'
  },



})