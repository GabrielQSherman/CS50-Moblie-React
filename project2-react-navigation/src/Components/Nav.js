import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MainStack from './MainStack'

export default class Nav extends React.Component {

    render () {
        return (
            <MainStack/>
        );
    }
 
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  stack: {
    backgroundColor: '#000'
  }
});
