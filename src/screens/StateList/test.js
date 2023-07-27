import React,{useState} from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView,View,Textinput } from "react-native-safe-area-context";
export default function form(){
    const [name,setName]=useState("");
    const [email,setemail]=useState("");
    const [number,setphonenumber]=useState(null);
    const handleSubmit=()=>{
        const data={
            name:name,
            email:email,
            number:number,
        }
        axios.post("/example.com",data).then((response)=>(console.log(response)));
    }
    return{
        <SafeAreaView>
        <View>
        <Textinput
        placeholder={"Enter name"}
        onChangeText={(text)=>(setName(text))}
        >
        </Textinput>
        <Textinput
        placeholder={"Enter Email"}
        onChangeText={(text)=>(setemail(text))}
        >
        </Textinput>
        <Textinput 
        placeholder={"enter phone number"}>
        onChangeText={(text)=>(setphonenumber(text))}
        </Textinput>
        <TouchableOpacity onPress={()=>handleSubmit}>
        <Text>
        Submit Button
        </Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    }
}