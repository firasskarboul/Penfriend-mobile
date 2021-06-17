import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, KeyboardAvoidingView, ActivityIndicator, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux'
import { signIn } from '../../redux/index';

class _SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    // componentDidMount() {
    //     this.animation.play();
    //     // Or set a specific startFrame and endFrame with:
    //     // this.animation.play(30, 120);
    // }

    render() {

        const { userReducer, signIn } = this.props

        const { loading } = userReducer

        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(130,182,255, 0.9)', 'rgba(132,255,159,0.9)']}
                    style={styles.background}
                />

                {/* <View style={styles.animationView}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 250,
                            height: 250
                        }}
                        source={require('../../assets/lottie_animations/login-animation.json')}
                    />
                </View> */}

                <KeyboardAvoidingView style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    behavior="padding"
                    enabled
                >
                    <View>
                        <Image
                            source={require('../../assets/images/login_kids.png')}
                            style={{
                                width: 280,
                                height: 280,
                                marginBottom: 10
                            }}
                        >
                        </Image>
                    </View>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={email => this.setState({ email: email })}
                        placeholder='Email'
                        placeholderTextColor='white'
                        keyboardType='email-address'
                    />

                    <TextInput
                        style={styles.inputText}
                        onChangeText={password => this.setState({ password: password })}
                        placeholder='Password'
                        placeholderTextColor='white'
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: Dimensions.get('window').width - 200,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#edff8f',
                            borderRadius: 25,
                        }}
                        onPress={() => signIn({ email: this.state.email, password: this.state.password })}
                    >

                        {
                            loading
                                ?
                                <ActivityIndicator size="small" color="#0000ff" />
                                :
                                <Text>Sign In</Text>
                        }

                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ marginTop: 10 }}>or</Text>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: Dimensions.get('window').width - 250,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#ff9668',
                                borderRadius: 25,
                                marginTop: 10
                            }}
                            // onPress={() => this.navigation.navigate('')} navigation to signup
                        >
                            <Text style={{color: 'white'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const SignIn = connect(mapStateToProps, { signIn })(
    _SignIn
)

export { SignIn };

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

    inputText: {
        height: 40,
        width: Dimensions.get('window').width - 80,
        borderColor: 'white',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 25,
        marginBottom: 15
    },

    animationView: {
        flexGrow: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
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
    }
});
