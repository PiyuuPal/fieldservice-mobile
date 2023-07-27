import { StyleSheet } from 'react-native';

export const editJobDetailsStyles = StyleSheet.create({
  txtStyle: {
    alignSelf:'center',
    marginTop:2
  },
  viewContain:{
    flexDirection: 'row', 
  //  backgroundColor:'yellow',
    borderBottomWidth:1,
    justifyContent:'space-between',
    marginVertical:10
  },
  iconstyle:{
    borderWidth:1,
    borderRadius:50,
    padding:5
  },
  jobIdView:{
    padding:10, 
    alignItems: 'center', 
    justifyContent: 'center'
 },
 saveBtn:{
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'purple',
},
input:{
    borderBottomWidth: 1,
     backgroundColor: 'yellow'
},
btntxt:{
    color: 'white',
     fontWeight: 'bold',
     fontSize: 15 
},
midView:
{
flex:1,
backgroundColor:'red',
justifyContent: 'space-between',
}
});
