import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { StyleSheet } from 'react-native';

export const jobStyles = StyleSheet.create({
  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  renderNotes: {
    borderRadius: 10,
    padding: spacing.s,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#E4EFF2",
    marginVertical: 5
  },
  tabItem: {
    margin: 6,
    paddingLeft: 30,
    paddingRight: 30,
    padding: 10,
    backgroundColor: '#E5F1FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection:"row",
  },
  viewrow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewcall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.m
  },
  jobId: {
    marginLeft: 25,
    color: '#041B3E',
    fontSize: 18,
    fontWeight: '700'
  },
  nametxt: {
    fontSize: 17,
    fontWeight: '600',
    color: '#041B3E'
  },
  imgCall: {
    height: 60,
    width: 60
  },
  viewStatus: {
    marginTop: -45,
    padding: spacing.s,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewSetStatus: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    borderRadius: 50,
  },
  viewSetStatusColor: {
    marginHorizontal: 10,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 3,
    borderRadius: 50,
    backgroundColor: '#EDEDED',
  },
  statusTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757588'
  },
  ViewSchDet: {
    padding: spacing.m,
    paddingTop: 0,
  },
  viewSchInter: {
    marginTop: 4,
    backgroundColor: '#E5F1FF',
    borderRadius: 10,
    padding: spacing.s,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtSch: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757588',
    marginLeft: -30
  },
  txtWetColor: {
    color: '#041B3E',
    fontWeight: '600'
  },
  txtTypAddSource: {
    fontSize: 14,
    fontWeight: '600',
    color: '#757588'
  },
  txtValTypAS: {
    fontSize: 16,
    color: '#041B3E',
    fontWeight: '600'
  },
  blankView: {
    padding: 1,
    backgroundColor: '#E4EFF2',
    marginVertical: 20
  },
  viewTags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: spacing.s,
  },
  headingTxt: {
    fontSize: 19,
    color: '#041B3E',
    fontWeight: '600'
  },
  viewAssTeam: {
    marginTop: 10,
    borderRadius: 10,
    padding: spacing.s,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757588',
    marginLeft: 10
  },
  flatListNotes: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10
  },
  editImg: {
    // height: 20,
    // width: 18
  },
  jobTypetouch: {
    padding: spacing.s,
    backgroundColor: 'white',
    borderColor: "#E4EFF2",
    borderWidth: 1,
    borderRadius: 15
  },
  jobtypeView: {
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  statusJobTouch: {
    borderWidth: 1,
    borderColor: "#D2DDE9",
    padding: 10,
    borderRadius: 50,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalView: {
    backgroundColor: "white",
    padding: spacing.m,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '75%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  modalheading: {
    color: '#041B3E',
    fontSize: 20,
    fontWeight: "700",
    fontFamily: font.bold,
  },
  saveBtn:{
    padding: 10, 
    borderRadius: 50, 
    backgroundColor: '#195090', 
    justifyContent: "center", 
    alignItems: 'center' 
  },










  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemHeader: {
    flexDirection: "row",

    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  itemHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  itemContent: {
    padding: 16,
  },
  invoiceId: {
    marginLeft: 25,
    color: "#041B3E",
    fontSize: 18,
    fontWeight: "700",
  },
  backicon: {
    marginTop: 3,
  },
  details: {
    flexDirection: "row",
    marginTop: 5,
  },
  userdetails: {
    marginLeft: 5,
  },
  doticon: {
    color: "blue",
  },
  invoicedetails: {
    marginLeft: "auto",
    marginRight: 5,
  },
  icon: {
    color: "black",
  },
  itemname:{
    color:'black',
    fontWeight:'700',
    fontSize:18,
    textTransform:'capitalize',
  },
  quantity:{
    fontSize:16,
  },
  price:{
    fontSize:16,
  },
  itemdetails:{
    borderBottomColor:'black',
    borderBottomWidth:0.8,
    marginVertical:5,
  },
  amount:{
    flexDirection:'row',
    marginVertical:10,
  },
  textamount:{
    marginLeft:'auto',
    fontSize:16,
  },
  amountheading:{
    fontSize:16,
  },





  headerJobTitle: {
    color: "#041B3E",
    fontFamily: font.bold,
    fontSize: 18,
  },
  viewInput: {
    marginHorizontal:10,
    marginVertical:20,
    borderWidth: 1,
    borderColor: "#D5DBE4",
    flexDirection: "row",
    width: "95%",
    // paddingRight: 10,
    borderRadius: 10,
    alignItems:"center",justifyContent:"space-between"
  },
});
