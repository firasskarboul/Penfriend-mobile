import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

export default class SignUp extends React.Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
                    style={styles.background}
                />

                <View style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    width: '100%',
                    height: '10%',
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10
                }}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 250,
                            height: 250
                        }}
                        source={require('../../assets/lottie_animations/create-account.json')}
                    // OR find more Lottie files @ https://lottiefiles.com/featured
                    // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                    />
                </View>
                <View style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>SIGN UP</Text>
                </View>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },

    buttonSignin: {
        padding: 15,
        paddingHorizontal: 61,
        marginBottom: 25,
        alignItems: 'center',
        borderRadius: 25,
    },

    buttonSignup: {
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
    },

    text: {
        backgroundColor: 'transparent',
        fontSize: 22,
        color: '#fff',
    },
});
