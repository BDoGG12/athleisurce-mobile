import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingPage from './src/screens/landing-page/landing-page';
import FeaturedProducts from './src/screens/featured-products/featured-products';
import LogInPage from './src/screens/login-page/login-page';
import SignUpPage from './src/screens/sign-up-page/sign-up-page';
import ShirtsPage from './src/screens/shirts-page/shirts-page.js';
import PantsPage from './src/screens/pants-page/pants-page.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
      name='Featured Products'
      component={FeaturedProducts}
    />
    <Stack.Screen
      name='Log In'
      component={LogInPage}
    />
    <Stack.Screen
      name='Sign Up'
      component={SignUpPage}
    />
  </Stack.Navigator>
);

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Shirts" component={ShirtsPage} />
        <Tab.Screen name="Pants" component={PantsPage} />
        <Tab.Screen name="Profile" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
