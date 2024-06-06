import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screens/landing-page/landing-page';
import LogInPage from './src/screens/login-page/login-page';
import SignUpPage from './src/screens/sign-up-page/sign-up-page';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={LandingPage}
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
