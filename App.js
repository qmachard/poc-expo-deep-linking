import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createURL} from 'expo-linking';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const prefix = createURL('/');

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home',
        Settings: 'settings',
      },
    },
    getStateFromPath: path => {
      if ('settings' === path) {
        return {
          routes: [{name: 'Home'}, {name: 'Settings'}],
        };
      }

      return {
        routes: [{name: 'Home'}]
      }
    }
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
