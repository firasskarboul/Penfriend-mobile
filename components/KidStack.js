import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home'
import { ParentHome } from '../screens/parentZone/parentHome'
import { KidsHome } from '../screens/kidZone/kidsHome'

const Stack = createStackNavigator();

export default function KidStack() {

  return (
    <Stack.Navigator
      initialRouteName="Kids Zone"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Kids Zone" component={KidsHome} />
    </Stack.Navigator>
  );
}