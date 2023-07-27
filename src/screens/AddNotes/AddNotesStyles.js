import { spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const addNote = StyleSheet.create({
container:{
    flex: 1, 
    padding: spacing.m 
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
     backgroundColor: 'white'
},
btntxt:{
    color: 'white',
     fontWeight: 'bold',
     fontSize: 15 
},
midView:
{
flex:1,
justifyContent: 'space-between',
}

})