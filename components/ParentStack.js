import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParentHome } from '../screens/parentZone/parentHome'

const Stack = createStackNavigator();

export default function ParentStack() {

  return (
    <Stack.Navigator
      initialRouteName="Parent Zone"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Parent Zone" component={ParentHome} />
    </Stack.Navigator>
  );
}