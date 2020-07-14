import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './Home';
import About from './About';

const Stack = createStackNavigator();

export default function MainStack() {
  return (

    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      <StatusBar style="light" />

    </NavigationContainer>

  );
}
