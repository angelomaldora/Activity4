import React, { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const mapRef = useRef(null); 

  const [mapRegion, setMapRegion] = useState({
    latitude: 9.7535864,
    longitude: 123.966893,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission Denied');
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  const handleZoomIn = () => {

    const newRegion = {
      latitude: mapRegion.latitude,
      longitude: mapRegion.longitude,
      latitudeDelta: mapRegion.latitudeDelta / 100,
      longitudeDelta: mapRegion.longitudeDelta / 100,
    };
  
    mapRef.current.animateToRegion(newRegion, 1000); 
  };

  const handleZoomOut = () => {

    const newRegion = {
      latitude: mapRegion.latitude,
      longitude: mapRegion.longitude,
      latitudeDelta: mapRegion.latitudeDelta * 1,
      longitudeDelta: mapRegion.longitudeDelta * 1,
    };

    mapRef.current.animateToRegion(newRegion, 1000); 
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion} zoomEnabled={true} ref={mapRef}>
        <Marker coordinate={mapRegion} title='My Location' />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Zoom In" onPress={handleZoomIn} />
        <Button title="Zoom Out" onPress={handleZoomOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
});
