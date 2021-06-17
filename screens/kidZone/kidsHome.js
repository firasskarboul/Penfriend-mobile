import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default class _KidsHome extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
                    style={styles.background}
                />

                <View style={{
                    alignItems: 'center',
                    marginBottom: 30
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#a29bfe',
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        marginBottom: 20
                    }}
                        onPress={async () => {
                            await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
                            await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
                            await AdMobInterstitial.showAdAsync();
                        }}
                    >

                    </TouchableOpacity>
                    <Text style={styles.gender}>Kids Home</Text>
                </View>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const KidsHome = connect(mapStateToProps)(
    _KidsHome
)

export { KidsHome };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
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
