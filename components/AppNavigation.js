import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { signIn } from '../redux/index';
import { connect } from 'react-redux'

export default function _AppNavigation(props) {

    const { userReducer } = props

    const { loggedIn } = userReducer

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            {
                loggedIn ? (
                    <Drawer.Navigator initialRouteName="App">
                        <Drawer.Screen name="App" component={AppStack} />
                    </Drawer.Navigator>
                ) : (
                    <AuthStack />
                )
            }
        </NavigationContainer>
    );
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const AppNavigation = connect(mapStateToProps, { signIn })(
    _AppNavigation
)

export { AppNavigation };