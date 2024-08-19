import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
 import MainScreen from './Main';
import Profile from './Profile';
import ProfileScreen from './Profile';
import Storage from './Storage';
 import PriceNews from './PriceNews';
import Book from './Book'
import SplashScreen from './SplashScrren';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      {/* <Stack.Navigator initialRouteName="Login"> */}
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        {/* <Stack.Screen name="MianScreen" component={MainScreen} />*/
        <Stack.Screen name="Profile" component={Profile} /> }
        <Stack.Screen name="Storage" component={Storage} />
        {<Stack.Screen name="PriceNews" component={PriceNews} /> }
        {<Stack.Screen name="Book" component={Book} /> }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
