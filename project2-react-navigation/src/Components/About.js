import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function About({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}