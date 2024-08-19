import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

// Example warehouse data
const warehouses = [
  { id: 1, name: 'Warehouse A', latitude: 37.78825, longitude: -122.4324 },
  { id: 2, name: 'Warehouse B', latitude: 37.78825, longitude: -122.4424 },
  // Add more warehouses here
];

export default function NearbyWarehouses() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      fetchLocation();
    }
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to show nearby warehouses.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        fetchLocation();
      } else {
        Alert.alert('Permission Denied', 'Location permission is required to show nearby warehouses.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {warehouses.map((warehouse) => (
            <Marker
              key={warehouse.id}
              coordinate={{
                latitude: warehouse.latitude,
                longitude: warehouse.longitude,
              }}
              title={warehouse.name}
            />
          ))}
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            pinColor="blue"
          />
        </MapView>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});
