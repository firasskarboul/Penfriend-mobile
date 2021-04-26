import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import { signOut } from '../redux/index';

export default class _Home extends React.Component {

    render() {

        const { signOut } = this.props

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
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        paddingHorizontal: 50,
                        backgroundColor: 'white',
                        borderRadius: 25
                    }}
                        onPress={() => signOut()}
                    >
                        <Text>Sign out</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        paddingHorizontal: 50,
                        backgroundColor: 'white',
                        borderRadius: 25
                    }}
                        onPress={() => this.props.navigation.navigate('details')}
                    >
                        <Text>Sign</Text>
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Home = connect(mapStateToProps, { signOut })(
    _Home
)

export { Home };

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
