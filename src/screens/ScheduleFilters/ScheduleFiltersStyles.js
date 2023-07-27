import { StyleSheet } from "react-native";
import { font } from "@/theme/font";
import { spacing } from "@/theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    paddingVertical: 5,
    marginRight: 10,
    borderRightColor: "black",
    borderRightWidth: 0.7,
    textTransform:'capitalize',
  },
  flatlistcontainer: {
    marginVertical: 10,
  },
  secondaryitem: {
    borderWidth: 1,
    borderColor: "#D2DDE9",
    borderRadius: 30,
    marginVertical: 15,
    width: "25%",
    paddingVertical: 10,

    marginHorizontal: 15,
  },
  title: {
    textAlign: "center",
  },
  absoluteFill: {
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the opacity as desired
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {},
  secondaryItemContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 10,
    borderColor: "#E4EFF2",
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.04,
    shadowRadius: 15,
    borderRadius: 15,
  },
  flatlistitemcontainer: {},
  filterText: {
    fontSize: 16,
    marginHorizontal: 20,
    color: "#757588",
    textTransform:'capitalize',
  },
  headingcontainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  resetbutton: {
    marginLeft: "auto",
    marginRight: 40,
    flexDirection: "row",
  },
  listcheckbox: {
    marginLeft: "auto",
  },
  checkbox: {
    marginLeft: "auto",
  },
  heading: {
    color: "black",
    fontSize: 18,
    marginLeft: 20,
    textAlignVertical: "center",
  },
  headingContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  selectallbox: {
    marginLeft: "auto",
    marginRight: 10,
    flexDirection: "row",
  },
  showresult: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  iconview: {
    backgroundColor: "#195090",
    padding: 10,
    borderRadius: 70,
  },
  mainheading:{
    fontSize:20,
    color:'black',
    marginLeft:25,
    textTransform:'capitalize',
  },
  swatch:{
   width:20,
   height:20,
   borderRadius:70,
   marginBottom:'auto',
   marginTop:4,
   marginRight:10,
  },
  icontext: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    color: "#041B3E",
  },
  headingbox: {
    tintColor: "#D2DDE9",
    borderRadius: 70,
  },
  textbox: {
    textAlignVertical: "center",
  },
  resetbuttontext: {
    color: "black",
    fontSize: 16,
  },
  icon1: {
    marginLeft: 10,
    width: 20,
    height: 20,
    marginTop: 2,
  },
  headertext: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 15,
    fontFamily: font.regular,
  },
  viewheader: {
    marginTop: 15,
    paddingBottom: 10,
    height: 40,
  },
  secondaryItemText: {
    textAlignVertical: "center",
  },
  iconrightChevron: {
    marginTop: 3,
    marginBottom: "auto",
    marginLeft: spacing.m,
  },
  selectedFilterContainer: {
    backgroundColor: "white",
  },
  selectedFilterText: {
    color: "blue",
  },
  listcontainer: {
    padding: 20,
    marginVertical: 10,
    height: "75%",
  },
  checkboxContainer: {
    flexDirection: "row",
    width: "100%",
  },
  header: {
    fontSize: 18,
    color: "#041B3E",
    textTransform: 'capitalize'
  },
  button: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#E4EFF2",
    borderStyle: "solid",
    marginVertical: 10,
    padding: 20,
    shadowColor: "#000000",

    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    backgroundColor: "#ffffff",
  },
});
