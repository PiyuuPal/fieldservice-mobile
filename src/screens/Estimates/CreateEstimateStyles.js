import { spacing } from "@/theme";
import { font } from "@/theme/font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    // padding: 16,
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
  custIconn: {
    // padding: 15,
    color: '#195090'
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
  itemname: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  quantity: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  itemdetails: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    marginVertical: 5,
  },
  amount: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  subamount: {
    flexDirection: 'row',
    marginTop: 5
  },
  textamount: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#041B3E',
    fontWeight: '700'
  },
  noteView: {
    backgroundColor: 'white', borderWidth: 1, borderColor: '#D3D3D3', marginHorizontal: 10,  borderRadius: 10, shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3, elevation: 4
  },
  subTotaltextamount: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700'
  },
  subtextamount: {
    marginLeft: 'auto',
    fontSize: 16,
    color: 'grey',
    // fontWeight: '700'
  },
  amountheading: {
    fontSize: 16,
    color: '#041B3E',
    fontWeight: '700'
  },
  totalamountheading: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700'
  },
  subamountheading: {
    color: 'grey',
    fontSize: 16,
    textDecorationLine: 'underline'
  },
  totalPoint: { backgroundColor: '#041B3E', width: '100%', padding: 10, marginVertical: spacing.x, },
  card: {
    // backgroundColor: '#EAECFA',
    marginTop: spacing.x,
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
    // alignSelf: "flex-end",
    marginTop: -40,
    // paddingTop: 2,
    // paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: "80%"
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
  fullname: {
    textAlignVertical: 'center',
    marginLeft: spacing.x,
    fontSize: 15,
    fontFamily: font.regular,
    color: '#041B3E',

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
  imgView: {
    // borderRadius: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    // borderColor: '#E4EFF2',
    // borderWidth: 2,
    padding: 4,
    
    width: 50,
  },
});
