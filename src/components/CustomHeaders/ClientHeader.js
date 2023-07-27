import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { shadow, spacing } from '@/theme';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { style } from '@/screens/Login/Login.styles';
import { font } from '@/theme/font';
import { backgroundImage, drawer } from '@/assets';
import { NAVIGATION } from '@/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { clearStoreAddress } from '@/actions/UserActions';
import { useDispatch } from 'react-redux';
export function ClientHeader({ title }) {
    const navigation = useNavigation();
    const dispatch=useDispatch()
    const addnewClient = () => {
        dispatch(clearStoreAddress())
        navigation.navigate(NAVIGATION.addNewClient)
    }
    return (
        <View>
            <ImageBackground style={styles.container} source={backgroundImage}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
                        <Image source={drawer} />
                    </TouchableOpacity>
                    <Text style={styles.txttitle}>{title}</Text>
                    <View style={{ marginLeft: '60%' }}>
                        <Entypo name="circle-with-plus" size={30}
                            style={{ color: "#195090" ,marginLeft:12}}
                            onPress={addnewClient}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 20
    },
    txttitle: {
        marginLeft: 20,
        fontFamily: font.bold,
        color: '#041B3E',
        fontSize: 20
    },
    custIcon: {
        // padding: 15,
        color: '#195090',

    },
})