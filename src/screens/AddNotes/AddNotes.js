import { spacing } from '@/theme';
import React, { useState,useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { addNote } from '@/screens/AddNotes/AddNotesStyles';
import { useDispatch,useSelector } from 'react-redux';
import { addNotesFun } from '@/actions/UserActions';
function AddNotes({navigation}) {
  const jobDetailsData=useSelector((state)=>state?.user?.jobDetailsDataReducer)
  
  const [notes, setNotes] = useState('');
  const dispatch=useDispatch();
  const saveFun=()=>{
   
   const data={
         jobId:jobDetailsData?.id,
         description:notes,
         sourceType:"Mob"
   }
   dispatch(addNotesFun(data,navigation))
  }
  useEffect(() => {
    const grandparentNavigation = navigation.getParent('HomeNavigator');
     
    if (grandparentNavigation) {
      const screenOptions = {
        headerShown: false,
      };
      try {
       grandparentNavigation.setOptions(screenOptions);
      } catch (error) {
        
      }
    } else {
      
    }
    return () => {
      if (grandparentNavigation) {
        const screenOptions = {
          headerShown: true,
        };
        try {
          grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
          
        }
      }
    };
  }, []);
  return (
    <SafeAreaView style={addNote.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={addNote.midView}>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <TextInput
            multiline
            style={addNote.input}
            onChangeText={(text) => {
              setNotes(text);
            }}
          />
        </View>
        <View style={{paddingTop:20,paddingBottom:20}}>
          <TouchableOpacity
            style={addNote.saveBtn}
          onPress={saveFun}
         >
            <Text style={addNote.btntxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddNotes;
