import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator,ImageBackground } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://your-backend-url.com/api/user-details');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../Asssests/5.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData?.name || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.value}>{userData?.mobileNumber || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{userData?.address || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Aadhaar Number:</Text>
        <Text style={styles.value}>{userData?.aadhaarNumber || 'N/A'}</Text>
      </View><View style={styles.infoContainer}>
        <Text style={styles.label}>Land Holding:</Text>
        <Text style={styles.value}>{userData?.LandHolding || 'N/A'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image style as needed
  },
  container: {
    flexGrow: 1,
    //justifyContent: 'center',
   alignItems: 'center',
    padding: 20,
    marginTop:130,
   // marginTop: -180,
  //  backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    marginLeft: -190,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: '40%',
  },
  value: {
    fontSize: 18,
    color: '#555',
    width: '60%',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#f78a4e',
    padding: 15,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
    marginRight:160,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
