import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://your-backend-url.com/api/login', {
        phoneNumber,
      });

      if (response.data.success) {
        Alert.alert('Success', 'Logged in successfully');
        // navigation.navigate('HomeScreen'); // Replace with your home screen
      } else {
        Alert.alert('Error', 'Invalid Phone Number');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../Asssests/8.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.createAccountText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
   justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Semi-transparent background
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Set text color
    textAlign : 'left',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff', // Ensure the input background is visible
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
  createAccountText: {
    fontSize: 20,
    color: '#000',
    textDecorationLine: 'underline',
  },
});
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ImageBackground,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('https://your-backend-url.com/api/login', {
//         phoneNumber,
//       });

//       if (response.data.success) {
//         Alert.alert('Success', 'Logged in successfully');
//         // navigation.navigate('HomeScreen'); // Replace with your home screen
//       } else {
//         Alert.alert('Error', 'Invalid Phone Number');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../Asssests/7.jpg')} // Replace with your background image path
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Phone Number"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           keyboardType="phone-pad"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.createAccountText}>Create an Account</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Adjust the image style as needed
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20, // Add padding to ensure content doesn't touch the screen edges
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#000', // Set text color
//    // textAlign: 'left', // Align text to the left
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     fontSize: 16,
//     marginBottom: 20,
//     backgroundColor: '#fff', // Ensure the input background is visible
//     // textAlign: 'left', // Align text inside the input to the left
//   },
//   button: {
//      backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     width: '50%',
//     marginBottom: 20,
//   //   backgroundColor: '#007bff',
//   //   padding: 15,
//   //   borderRadius: 10,
//   //   width: '80%',
//   //   marginBottom: 20,
//   //  // alignItems: 'flex-start', // Align button text to the left
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   createAccountText: {
//     fontSize: 18,
//     color: '#007bff',
//     textDecorationLine: 'underline',
//    // textAlign: 'left', // Align text to the left
//   },
// });
