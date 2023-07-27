import React, { Component } from 'react'
import { Text, View ,ActivityIndicator,Modal} from 'react-native'

export function ModalLoader(props) {
  const transparent = 'rgba(0,0,0,0.5)'
    return (
        <View>
          <Modal visible={props?.modalView} animationType="slide" transparent={true} >
            <View style={{ flex: 1, backgroundColor: transparent, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color='white' size="large" />
            </View>
          </Modal>
        </View>
    )
}
