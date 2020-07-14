import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    );
}