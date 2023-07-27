import { spacing } from "@/theme";
import { font } from "@/theme/font";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
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
    textAlign: 'center',
    fontSize: 18,
  },
  headerImg: {
    height: 98,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: "white",
  },
  custIconn: {
    padding: 12,
    color: "#195090",
  },
  noResultView: { backgroundColor: '#ECECEC', height: 150, width: 150, borderRadius: 100, alignSelf: 'center', marginTop: spacing.xl },
  noResImg: { alignSelf: 'center', marginTop: spacing.s },
  noResText: { textAlign: 'center', marginVertical: spacing.s, fontSize: 18, fontWeight: '600' }
})