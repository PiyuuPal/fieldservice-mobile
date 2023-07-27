import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { shadow, spacing } from '@/theme';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { style } from '@/screens/Login/Login.styles';
import { font } from '@/theme/font';
import { backgroundImage, drawer } from '@/assets';
export function MessageHeader({ title }) {
    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground style={styles.container} source={backgroundImage}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
                        <Image source={drawer} />
                    </TouchableOpacity>
                    <Text style={styles.txttitle}>{title}</Text>
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
        fontSize: 20
    }
})
