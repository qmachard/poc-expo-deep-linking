import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>HomeScreen</Text>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
