import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [Adhar, setAdhar] = useState('');
 // const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://your-backend-url.com/api/signup', {
        Adhar
        
      });

      if (response.data.success) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Unable to create account');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../Asssests/9.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.title1}>Enter Aadhaar Number</Text>
      <TextInput
        style={styles.input}
        placeholder="12-digit unique identity number"
        value={Adhar}
        onChangeText={setAdhar}
        keyboardType="phone-pad"
      />
     
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover', // Adjust the image style as needed
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//    // backgroundColor: '#fff',
//    //padding: 50,
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   title1: {
//     fontSize: 22,
//     //fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     fontSize: 16,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     width: '60%',
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   loginText: {
//     fontSize: 20,
//     color: '#000',
//     textDecorationLine: 'underline',
//   },
// });
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image style as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-230, // Adjust this value to move the container upward
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title1: {
    fontSize: 25,
    marginBottom: 12,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '60%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginText: {
    fontSize: 20,
    color: '#000',
    textDecorationLine: 'underline',
  },
});
