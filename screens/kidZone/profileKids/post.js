import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    View,
    Dimensions,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import LottieView from 'lottie-react-native'

const Post = ({
    // user,
    id,
    postOwner,
    firstName,
    lastName,
    avatar,
    postPhoto,
    isLiked = false,
    onLikePost = () => { }
}) => {

    const animation = React.useRef(null);
    const isFirstRun = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRun.current) {
            if (isLiked) {
                animation.current.reset();
            } else {
                animation.current.play(20, 60);
            }
            isFirstRun.current = false;
        } else if (isLiked) {
            animation.current.reset();
        } else {
            animation.current.play(20, 60);
        }
    }, [isLiked]);

    return (
        <View style={styles.item}>
            <View style={{
                flexGrow: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                paddingHorizontal: 10,
            }}>
                <Image source={require('../../../assets/images/kids/boy2.jpg')} style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginRight: 10
                }} />
                <Text style={{
                    color: '#ecf0f1',
                    fontFamily: 'WTR',
                    fontSize: 25,
                    fontWeight: 'bold',
                }}>{firstName} {lastName}</Text>
            </View>
            <View style={{ flexGrow: 1 }}>
                <Text style={{ color: '#2d3436', paddingHorizontal: 10 }}>WHAT A VACATION WITH YOU GUYS</Text>
                <Image source={require('../../../assets/images/EXAMPLES/post1.jpg')} style={{
                    marginTop: 10,
                    maxWidth: Dimensions.get('screen').width / 1.1,
                    maxHeight: Dimensions.get('screen').height / 4
                }} />

                <TouchableOpacity onPress={() => {
                    onLikePost(id);
                }}>
                    <LottieView
                        ref={animation}
                        style={styles.lottieHeart}
                        source={require('../../../assets/lottie_animations/likeButton2.json')}
                        autoPlay={false}
                        loop={false}
                    />
                </TouchableOpacity>

                <View style={{
                    marginTop: 10,
                    alignSelf: 'center',
                    width: Dimensions.get('window').width / 1.3,
                    borderTopColor: 'rgba(236, 240, 241, 0.5)',
                    borderTopWidth: 1,
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    lottieHeart: {
        width: 80,
        height: 80
    },

    item: {
        flexGrow: 1,
        height: Dimensions.get('screen').height / 2,
        marginBottom: 30,
        borderRadius: 10
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },
});

export default Post;