import React from 'react';
import { StyleSheet, Text, View, ScrollView, createStackNavigator, createSwitchNavigator } from 'react-native';


import HomeScreen from './Home'


const stackNav = createStackNavigator({
  "Home": HomeScreen,
  "About": About
})

const appNav = createSwitchNavigator({
  "Login": Login,
  "Main": MyStackNav, 
})

export default class Nav extends React.Component {

    render () {
        return (
          <View style={styles.container}>
            
            <Text>Navigation</Text>
            <createStackNavigator/>
            <createSwitchNavigator/>
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
