import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import MapView from 'react-native-maps';
const MapPage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red', marginTop: 20 }}>

            <MapView
                style={{ height: '100%', width: '90%', }}
                provider="google"
                showsUserLocation={true}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: 34.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsMyLocationButton={true}
                zoomEnabled={false}
                showsBuildings={true}
            />
            <View style={{ marginBottom: 50 }}></View>
        </View>

    )
}
export default MapPage;