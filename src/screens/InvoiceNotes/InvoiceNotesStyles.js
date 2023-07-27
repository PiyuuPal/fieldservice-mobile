import { StyleSheet } from "react-native";
import { font } from "@/theme/font";
import { spacing } from "@/theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  custIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "#195090",
  },
  headerTitle: {
    color: "#041B3E",
    // fontFamily: font.bold,
    fontWeight:'600',
    padding: spacing.s,
    fontSize: 20,
  },
  container1:{
    padding:spacing.m,
  },
  textboxfield:{
    borderWidth:1,
    borderColor:'grey',
    // height:'60%',
    textAlignVertical:'top',
    borderRadius:10,
    padding:10
  },
  heading:{
    fontSize:20,
    // fontFamily:font.medium,
    fontWeight:'600',
    color:'black',
    marginBottom:15,
  },
  cardbutton: {
    width: "100%",
    borderRadius: 70,
    backgroundColor: "#195090",
    marginTop: 50,
  },

  cardbuttontext: {
    color: "white",
    textAlign: "center",
    padding: 15,
  },
});