import { spacing } from "@/theme";
import { font } from "@/theme/font";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fbfbfb",
  },
  custIcon: {
    padding: 15,
    color: "#195090",
  },
  headerTitle: {
    color: "#041B3E",
    fontFamily: font.bold,
    padding: spacing.s,
    fontSize: 18,
  },
  noClientAvailable: {
    backgroundColor: "#ECECEC",
    height: 150,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  noClientText: { textAlign: "center", color: "#195090", fontSize: 18 },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#D5DBE4",
    borderRadius: 8,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  textboxfield: {
    fontFamily: font.regular,
    fontWeight: "600",
    fontSize: 16,
    // padding: spacing.xii,
    paddingHorizontal: 10,
    // backgroundColor:"red",
    width: "80%",
    color: "#757588",
  },
  placeholder: {
    fontSize: 16,
    color: "#999999",
  },

  imgIcon: {},
  secView: {
    flex: 1,
  },
  clientDetailView: { flexDirection: "row", marginTop: spacing.x },
  error: {
    color: "red",
    marginHorizontal: 40,
    marginVertical: 5,
    // marginLeft: 50,
    fontSize: 16,
    color: "red",
    fontFamily: font.regular,
    textAlign: "center",
    alignSelf: "flex-start",
  },
  txtClient: {
    fontFamily: font.regular,
    fontSize: 14,
    color: "#757588",
  },
  txtFieldView: {
    borderRadius: 15,
    borderColor: "#E4EFF2",
    borderWidth: 1,
    marginTop: spacing.x,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // // elevation: 1
  },
  txtName: {
    color: "#041B3E",
    fontFamily: font.bold,
    fontSize: 17,
    fontWeight: "600",
  },
  txtwithIcon: {
    color: "#195090",
  },
  txtClientDetail: {
    color: "#757588",
    fontFamily: font.medium,
    fontSize: 16,
    marginLeft: spacing.x,
  },
  textName: {
    color: "#041B3E",
    fontFamily: font.medium,
    fontSize: 18,
    padding: spacing.x,
  },
  headerJobTitle: {
    color: "#041B3E",
    fontFamily: font.bold,
    fontSize: 18,
  },
  thirdView: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  dateViewTime: {
    backgroundColor: "#FFFFFF",
    padding: spacing.x,
    marginTop: 10,
    borderColor: "#E4EFF2",
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: spacing.x,
  },
  dateTextTime: { fontFamily: font.bold, color: "#041B3E", fontSize: 15 },
  logbtn: {
    backgroundColor: "#195190",
    alignSelf: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    padding: 20,
    marginTop: 25,
  },
  loginButton: {
    // fontWeight: '700',
    fontSize: 20,
    color: "#041B3E",
    textAlign: "center",
    fontFamily: "OpenSans_Condensed-Bold",
  },
  headersubTitle: {
    color: "#041B3E",
    fontFamily: font.medium,
    // padding:spacing.s,
    marginTop: 20,
    fontSize: 14,
    letterSpacing: 0.8,
  },

  // jobtypes modal style///////////////////////////////////////////
  firstView: {
    flex: 1,
    // backgroundColor: 'green'
  },
  custIcon: {
    padding: 15,
    color: "#195090",
  },
  headerTitle: {
    color: "#041B3E",
    fontFamily: font.bold,
    padding: spacing.s,
    fontSize: 18,
  },
  headerTitlew: {
    color: "#041B3E",
    fontFamily: font.bold,
    fontWeight: '700',
    padding: spacing.s,
    fontSize: 18,
  },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#D5DBE4",
    borderRadius: 8,
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: "white",
  },
  textboxfield: {
    fontFamily: font.regular,
    fontWeight: "600",
    fontSize: 16,
    padding: spacing.xii,
    paddingHorizontal: 10,
    // backgroundColor:"red",
    width: "80%",
    color: "#9393AB",
    backgroundColor: "white",
  },
  placeholder: {
    fontSize: 16,
    color: "#999999",
  },

  imgIcon: {},

  clientDetailView: { flexDirection: "row", marginTop: spacing.x },
  error: {
    color: "red",
    marginHorizontal: 40,
    marginVertical: 5,
    // marginLeft: 50,
    fontSize: 16,
    color: "red",
    fontFamily: font.regular,
    textAlign: "center",
    alignSelf: "flex-start",
  },
  txtClient: {
    fontFamily: font.regular,
    fontSize: 14,
    color: "#757588",
  },
  txtFieldView: {
    
    // marginTop: spacing.x,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // // elevation: 1
  },
  headerTitle: {
    color: "#041B3E",
    fontFamily: font.regular,
    fontWeight: "600",
    padding: spacing.s,
    fontSize: 15,
  },
  headerTitlee: {
    color: "#041B3E",
    fontFamily: font.regular,
    fontWeight: "700",
    padding: spacing.s,
    fontSize: 20,
  },
  txtFieldTitle: {
    color: "#041B3E",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: font.bold,

},
txtFieldVieww: {
  padding: spacing.s,
  backgroundColor: '#FFFFFF',
  // backgroundColor: 'red',
  borderRadius: 8,
  borderColor: '#D5DBE4',
  borderWidth: 1,
  marginHorizontal:spacing.x

},
txtFieldTitlee: {
  color: '#041B3E',
  fontSize: 14,
  fontWeight: "600",
  fontFamily: font.bold
},
  txtName: {
    color: "#041B3E",
    fontFamily: font.bold,
    fontSize: 17,
    fontWeight: "600",
  },
  txtwithIcon: {
    color: "#195090",
  },
  txtClientDetail: {
    color: "#757588",
    fontFamily: font.medium,
    fontSize: 16,
    marginLeft: spacing.x,
  },
  textName: {
    color: "#041B3E",
    fontFamily: font.medium,
    fontSize: 18,
    padding: spacing.x,
  },
  headerJobTitle: {
    color: "#041B3E",
    fontFamily: font.bold,
    fontSize: 18,
  },
  thirdView: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  dateViewTime: {
    backgroundColor: "#FFFFFF",
    padding: spacing.x,
    marginTop: 10,
    borderColor: "#E4EFF2",
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: spacing.x,
  },
  dateTextTime: { fontFamily: font.bold, color: "#041B3E", fontSize: 15 },
  logbtn: {
    backgroundColor: "#195190",
    alignSelf: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    padding: 20,
    marginTop: 25,
  },
  loginButton: {
    // fontWeight: '700',
    fontSize: 20,
    color: "#041B3E",
    textAlign: "center",
    fontFamily: "OpenSans_Condensed-Bold",
  },
  headersubTitle: {
    color: "#041B3E",
    fontFamily: font.medium,
    // padding:spacing.s,
    marginTop: 20,
    fontSize: 14,
    letterSpacing: 0.8,
  },
  logInbuttonIcon: { color: "#FFFFFF", alignSelf: "center", margin: 17 },
  logInbutton: { alignItems: "center", marginTop: spacing.xl },
  logInbuttonView: {
    backgroundColor: "#195190",
    height: 55,
    width: 55,
    borderRadius: 55,
  },
  txtFieldView: {
    // padding: spacing.s,
    backgroundColor: "#FFFFFF",
    // backgroundColor: 'red',
    borderRadius: 8,
    borderColor: "#D5DBE4",
    borderWidth: 1,
    marginVertical:5
  },
  txtFieldTitle: {
    color: "#041B3E",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: font.bold,
    textAlign: "center",
    // alignSelf: 'center'
  },
  imgView: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: "#D5DBE4",
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
