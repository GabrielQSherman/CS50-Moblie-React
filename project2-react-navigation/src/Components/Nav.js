import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home';
import About from './About';

const Stack = createStackNavigator();

function MainStack() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const appNav = createSwitchNavigator({
//   "Login": Login,
//   "Main": MyStackNav, 
// })

export default class Nav extends React.Component {

    render () {
        return (
          <View style={styles.container}>
            <MainStack/>
          </View>
        );
    }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});
