import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const MapViews = () => {

    const [state, setState] = useState ({
        picupcords: {
          latitude: 30.7046,
          longitude: 76.7179,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        droplocationCors: {
          latitude: 30.7333,
          longitude: 76.7794,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    

    const onRegionChange = (region) => {
        
      };
    
      const mapRef = useRef();
    return (
        <View style={{ flex: 1,backgroundColor:"gray" }}>

         


   <MapView
      style={{ width: '100%', height: '100%',backgroundColor:"red" }}
      showsUserLocation={false}
      provider="google"
      ref={mapRef}
      onRegionChange={onRegionChange}
      initialRegion={{ 
        latitude: 30.7046,
          longitude: 76.7179,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}
    >
      {/* <Marker coordinate={picupcords} />
      <Marker coordinate={droplocationCors} /> */}

      {/* <MapViewDirections
        origin={{ 
            latitude: 30.7046,
          longitude: 76.7179,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}
        destination={{ latitude: 30.7333,
            longitude: 76.7794,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,}}
        apikey="AIzaSyAo57iuaP1NHJ_e3u9hAdS50JcWL2qILsI"
        strokeColor="red"
        strokeWidth={4}
        optimizeWaypoints={true}
        onReady={(result) => {
          mapRef.current.fitToCoordinates(result.coordinates, {
            edgePadding: {
              right: 30,
              bottom: 30,
              left: 30,
              top: 100,
            },
          });
        }}
      /> */}
    </MapView>
        </View>

    )
}
export default MapViews;