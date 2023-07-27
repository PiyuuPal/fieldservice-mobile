import { spacing } from "@/theme";
import { font } from "@/theme/font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container1: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,

  },
  txttitle: {
    marginLeft: 20,
    fontFamily: font.bold,
    fontSize: 20,
    textAlignVertical: 'center',
    color: '#041B3E'
  },
  viewInput: {
    borderWidth: 1,
    borderColor: '#D5DBE4',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 10,
    borderRadius: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: '#E4EFF2',
    borderBottomWidth: 1,
    // marginVertical: 10,
    paddingHorizontal: spacing.xx,

  },
  messageContent: {
    // flex: 1,
    marginLeft: 16,
    marginTop: 5
    // flexDirection: 'row',
  },
  itemContentView: { backgroundColor: "#ECECEC", height: 80, width: 80, borderRadius: 100, justifyContent: 'center', marginBottom: spacing.x },
  itemContentImg: { height: '60%', width: '60%', alignSelf: 'center' },
  sender: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#000000',
  },
  text: {
    color: 'grey',
    // marginLeft: 'auto',
    marginRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnDecrease:{backgroundColor:'#ECECEC',width:50},
  btnDecText:{fontSize:16,textAlign:'center',color:'black',fontWeight:'700',padding:10}
})

