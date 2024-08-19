// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,Linking, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Use FontAwesome for icons

// export default function HomePage() {
//   const navigation = useNavigation();
//   const [whatsappNumber, setWhatsappNumber] = useState('');
//   const helplineNumber = '1-800-123-4567'; // Example helpline number

//   useEffect(() => {
//     fetchWhatsappNumber();
//   }, []);

//   const fetchWhatsappNumber = async () => {
//     try {
//       const response = await axios.get('https://your-backend-url.com/api/whatsapp-number');
//       setWhatsappNumber(response.data.whatsappNumber);
//     } catch (error) {
//       console.error('Error fetching WhatsApp number:', error);
//     }
//   };

//   const handleProfileNavigation = () => {
//     navigation.navigate('Profile'); // Navigate to Profile screen
//   };

//   const handleWhatsappClick = () => {
//     const url = `whatsapp://send?phone=${whatsappNumber}`;
//     Linking.openURL(url).catch(() => {
//       console.error('Failed to open WhatsApp');
//     });
//   };

//   const handleNavigation = (screen) => {
//     navigation.navigate(screen); // Navigate to the specified screen
//   };

//   return (
// <ImageBackground
//      source={require('../Asssests/9.jpg')} // Replace with your background image path
//      style={styles.backgroundImage}
//    >
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={styles.iconButton}>
//           <Icon name="user" size={40} color="#007bff" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleWhatsappClick} style={styles.iconButton}>
//           <Icon name="whatsapp" size={35} color="#25D366" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('PriceNews')} style={styles.button}>
//           <Text style={styles.buttonText}>Price News</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleNavigation('Storage')} style={styles.button}>
//           <Text style={styles.buttonText}>Storage Near You</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleNavigation('Book')} style={styles.button}>
//           <Text style={styles.buttonText}>Book Now</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.helpline}>Helpline Number: {helplineNumber}</Text>
//     </View>
// </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//  backgroundImage: {
//    flex: 1,
//    resizeMode: 'cover',
//  },
//   container: {
//     flex: 1,
//    justifyContent: 'center',
//     alignItems: 'center',
//    // backgroundColor: '#fff',
//     padding: 20,
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 20,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 15,
//     marginBottom: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 25,
//   },
//   helpline: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#333',
//   },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomePage() {
  const navigation = useNavigation();
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const helplineNumber = '1-800-123-4567'; // Example helpline number

  useEffect(() => {
    fetchWhatsappNumber();
  }, []);

  const fetchWhatsappNumber = async () => {
    try {
      const response = await axios.get('https://your-backend-url.com/api/whatsapp-number');
      setWhatsappNumber(response.data.whatsappNumber);
    } catch (error) {
      console.error('Error fetching WhatsApp number:', error);
    };
  };

  const handleProfileNavigation = () => {
    navigation.navigate('Profile'); // Navigate to Profile screen
  };

  const handleWhatsappClick = () => {
    const url = `whatsapp://send?phone=${whatsappNumber}`;
    Linking.openURL(url).catch(() => {
      console.error('Failed to open WhatsApp');
    });
  };

  const handleNavigation = (screen) => {
    navigation.navigate(screen); // Navigate to the specified screen
  };

  return (
    <ImageBackground
      source={require('../Asssests/9.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} style={styles.iconButton}>
            <Icon name="user" size={40} color="#007bff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsappClick} style={styles.iconButton}>
            <Icon name="whatsapp" size={35} color="#25D366" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PriceNews')} style={styles.button}>
            <Text style={styles.buttonText}>Price News</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Storage')} style={styles.button}>
            <Text style={styles.buttonText}>Storage Near You</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Book')} style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.helpline}>Helpline Number: {helplineNumber}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Reduced padding
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15, // Reduced padding
  },
  iconButton: {
    padding: 5, // Reduced padding
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginTop: -80, // Adjust to move the container upwards or downwards
    marginVertical: 20, // This adds space between the containers
  },

  button: {
    backgroundColor: '#007bff',
    padding: 10, // Reduced padding
    borderRadius: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  helpline: {
    marginTop: 10, // Reduced margin
    fontSize: 16,
    color: '#333',
  },
});

