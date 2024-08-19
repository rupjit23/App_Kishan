// import React, { useEffect } from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace('Login'); // Navigate to the Login screen after 4 seconds
//     }, 10000); // 4000ms = 4 seconds

//     return () => clearTimeout(timer); // Clear the timer when the component unmounts
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../Asssests/pic2.jpg')} // Replace with your image path
//         style={styles.image}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff', // Set your preferred background color
//   },
//   image: {
//     width: '100%',
//     height: '90%',
//     resizeMode: 'cover', // Adjust the image style as needed
//   },
// });

// export default SplashScreen;
import React, { useEffect, useState, useRef } from 'react';
import { View, Image, StyleSheet, Animated, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const logoSize = useRef(new Animated.Value(1)).current; // Initial logo size set to 1

  useEffect(() => {
    // Show the logo after 1 second
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
      // Animate the logo from large to small
      Animated.timing(logoSize, {
        toValue: 0.5, // Logo will shrink to 50% of its size
        duration: 500, // Animation duration
        useNativeDriver: false,
      }).start();
    }, 1000); // 1 second delay

    const navigationTimer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the Login screen after 10 seconds
    }, 1000); // 10000ms = 10 seconds

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Asssests/pic2.jpg')} // Replace with your image path
        style={styles.image}
      />
      {logoVisible && (
        <Animated.Image
          source={require('../Asssests/cover.jpg')} // Replace with your logo path
          style={[styles.logo, { transform: [{ scale: logoSize }] }]}
        />
      )}
      <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your preferred background color
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover', // Adjust the image style as needed
  },
  logo: {
    position: 'absolute',
    width: 100,
    height: 100,
    bottom: '40%', // Adjust the position of the logo as needed
  },
  loadingIcon: {
    position: 'absolute',
    bottom: 50, // Adjust the position of the loading icon as needed
  },
});

export default SplashScreen;

