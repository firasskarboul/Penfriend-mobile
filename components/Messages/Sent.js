import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Sent = ({ message }) => {
    return (

        <View
            style={{
                backgroundColor: "#f7834a",
                padding: 15,
                marginLeft: '45%',

                marginTop: 5,
                marginRight: "5%",
                maxWidth: '60%',
                alignSelf: 'flex-end',
                borderRadius: 30,
            }}
        >
            <Text style={styles.text}>{message}</Text>

            <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View>
        </View>

    )
}
export default Sent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        alignSelf: 'flex-end',
    },
    duration: {
        color: '#b6b6b6',
        fontSize: 11,
        marginTop: 5,
        // fontFamily:'Montserrat_600SemiBold',
        alignSelf: 'flex-end'
    },

    rightArrow: {
        position: "absolute",
        backgroundColor: "#f7834a",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },

    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#514A9D",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20

    },

    gradient: {
        maxWidth: 220,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderRadius: 15

    },
    text: {
        color: '#fff',
        fontSize: 20
        // fontFamily:'Montserrat_700Bold'
    }
})