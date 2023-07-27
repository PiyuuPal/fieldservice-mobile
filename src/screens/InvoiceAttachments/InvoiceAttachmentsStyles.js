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
    fontFamily: font.bold,
    padding: spacing.s,
    fontSize: 18,
  },
  container1:{
    
    
  },
  textboxfield:{
    borderWidth:1,
    height:'60%',
    textAlignVertical:'top',
    borderRadius:20,
  },
  image:{
   width:150,
   height:150,
   marginHorizontal:15,
   marginVertical:15,
  },
  heading:{
    fontSize:20,
    fontFamily:font.medium,
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
  flatlist:{
   marginHorizontal:25,

  },
  addimage:{
    marginLeft:'auto',
    marginRight:'auto',
  }
});