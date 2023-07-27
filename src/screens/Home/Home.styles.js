import { spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  itemContainer: {
    padding: 8,
    marginBottom: 8,
  },
  itemContent: {
    flexDirection: 'column',
  },
  itemHeader: {
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemStatus: {
    fontSize: 14,
  },
  itemInfo: {
    fontSize: 14,
    marginBottom: 4,
    textAlignVertical: 'center',
  },
  card: {
    backgroundColor: '#EAECFA',
    margin: 18,
    borderRadius: 20,
  },
  jobDetails: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  jobDescription: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 140,
    backgroundColor: 'white',
    alignSelf: "flex-end",
    color: "#041B3E",
    fontWeight: '700',
    fontSize: 16
  },
  date: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 140,
    backgroundColor: 'white',
    color: "#757588",
    marginLeft: 5,
    // fontWeight:'/',
    fontSize: 14
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center'
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
    alignSelf: "flex-start",
    marginTop: -55,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 15
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  headingDashboard: {
    marginHorizontal: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  usericon: {
    padding: 4,
    borderRadius: 70,
    backgroundColor: 'white',
    paddingBottom: 8,
    color: 'black',
  },
  fullname: {
    textAlignVertical: 'center',
    marginLeft: 5,
    fontSize: 16,
  },
  // heading:{
  //  marginLeft:20,
  //  fontSize:20,
  //  color:'black',
  //  fontWeight:'700',
  // },
  address: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5
  },
  jobTiming: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5
  },
  profileicon: {
    backgroundColor: '#F2F4F6',
    alignSelf: 'center'
  },
  dashbtn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D2DDE9',
    padding: 10,
    margin: 5
  },
  fontStyle: {
    color: "#041B3E",
    fontSize: 16
  },
  fontlinkStyle: {
    color: "#195090",
    fontSize: 16
  },
  dashView: {
    //  flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  dashSalesView: {
    padding: 10
  },

  dashContain: {
    backgroundColor: "#F2F8FE",
    borderRadius: 10,
    marginTop: 10,
    padding: 20
  },
  recordsView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    backgroundColor: 'white'
  },
  salesrenderItemView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 15
  }
});
