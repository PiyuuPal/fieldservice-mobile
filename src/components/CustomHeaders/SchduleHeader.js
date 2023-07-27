import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { font } from '@/theme/font';
import { backgroundImage, drawer, schduleFilter, search } from '@/assets';
import { NAVIGATION } from '@/constants';
export function SchduleHeader({ title }) {
    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground style={styles.container} source={backgroundImage}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
                        <Image source={drawer} />
                    </TouchableOpacity>
                    <Text style={styles.txt}>{title}</Text>
                </View>
                <View style={styles.viewserach}>
                    <TouchableOpacity onPress={()=>navigation.navigate(NAVIGATION.ScheduleFilters)}>
                    <Image source={schduleFilter} style={{ marginLeft: 10, marginRight: 20 }} />
                    </TouchableOpacity>
                    <Image source={search} />
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 20
    },
    txt: {
        marginLeft: 20,
        fontFamily: font.bold,
        fontSize: 20
    },
    viewserach: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20
    }
})