import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Dimensions, SafeAreaView, Text, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler'

export default class _AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            password: '',
            selectedAge: 1,
            kidImage: null,
        };
    }

    render() {

        const image = require('../../../assets/images/parentZone/backgroundAdd.jpeg');
        const kid_avatar = require('../../../assets/images/kid_avatar.png');

        const pickImage = async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                } else {
                    let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                    });

                    if (!result.cancelled) {
                        this.setState({ kidImage: result.uri })
                    }
                }
            }
        }

        return (
            <View style={styles.container}>
                {/* <ImageBackground source={image} style={styles.bgImage}> */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#067ffc', '#0d0cfa', '#ba01b0', '#c60064', '#af0096']}
                    style={styles.background}
                />
                <SafeAreaView style={styles.SafeAreaViewContainer}>
                    <Image source={require('../../../assets/images/parentZone/mapMonde.png')}
                        style={{
                            width: 900,
                            height: 600,
                            position: 'absolute',
                            shadowOpacity: 0.4,
                            opacity: 0.4,
                            tintColor: '#fff'
                        }}
                    />

                    <View style={{
                        margin: 50,
                        width: 350,
                        paddingTop: 5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Sandy',
                            fontSize: 70,
                            color: '#ff4757',
                            textAlign: 'center'
                        }}>ADD NEW POST</Text>
                    </View>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                        <KeyboardAvoidingView style={{
                            flexGrow: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            behavior="padding"
                            enabled
                        >

                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>

                <StatusBar style="auto" />
                {/* </ImageBackground> */}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const AddPost = connect(mapStateToProps)(
    _AddPost
)

export { AddPost };

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

    SafeAreaViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    bgImage: {
        flexGrow: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    inputText: {
        height: 40,
        width: Dimensions.get('window').width - 80,
        borderColor: '#fff833',
        backgroundColor: '#fff833',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 12,
        marginBottom: 15
    },
});
