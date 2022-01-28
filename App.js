import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const [data, setData] = useState();

  const handleDeepLink = e => {
    const data = Linking.parse(e.url);

    setData(data);
  }

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>{data ? JSON.stringify(data) : "App not oppened with deep link"}</Text>
      <StatusBar style="auto" />
    </View>
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
