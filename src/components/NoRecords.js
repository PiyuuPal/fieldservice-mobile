import { styles } from '@/screens/Home/Home.styles'
import { shadow } from '@/theme'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export function NoRecords() {

    return (
        <View style={{ padding: 20, borderRadius: 10 }}>
            <View style={[styles.recordsView, shadow.primaryView]}><Text>No Records Found</Text></View>
        </View>
    )
}
