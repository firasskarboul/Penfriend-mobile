import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import axios from 'axios'

export default class _Settings extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
                    style={styles.background}
                />

                <SafeAreaView style={styles.SafeAreaViewContainer}>
                    
                </SafeAreaView>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Settings = connect(mapStateToProps)(
    _Settings
)

export { Settings }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },

    SafeAreaViewContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
