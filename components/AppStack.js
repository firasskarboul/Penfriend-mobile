import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home'
import { ParentHome } from '../screens/parentZone/parentHome'
import { KidsHome } from '../screens/kidZone/kidsHome'

const Stack = createStackNavigator();

export default function AuthStack() {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Parent Home" component={ParentHome} />
      <Stack.Screen name="Kids Home" component={KidsHome} />
    </Stack.Navigator>
  );
}