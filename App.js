import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './components/AuthStack'
import AppStack from './components/AppStack'
import Detail from './screens/Details';
import { Provider } from 'react-redux'
import { store } from './redux/index';

export default function App() {

  const loggedIn = store.getState().userReducer.loggedIn

  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          loggedIn ? (
            <Drawer.Navigator initialRouteName="App">
              <Drawer.Screen name="App" component={AppStack} />
              <Drawer.Screen name="details" component={Detail} />
            </Drawer.Navigator>
          ) : (
            <AuthStack />
          )
        }
      </NavigationContainer>
    </Provider>
  );
}
