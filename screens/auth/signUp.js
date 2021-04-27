import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import ViewPager from '@react-native-community/viewpager'
import FirstPage from '../../components/signup/firstPage'
import SecondPage from '../../components/signup/secondPage'
import ThirdPage from '../../components/signup/thirdPage'
import FourthPage from '../../components/signup/fourthPage'
import Footer from '../../components/signup/Footer'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {

    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        nationality: '',
        gender: '',
        phoneNumber: '',
        blueCard: '',
        birthday: '',
        parentSelfie: '',
        familySelfie: ''
    })

    const navigation = useNavigation();

    const pagerRef = useRef(null);

    const handlePageChange = pageNumber => {
        pagerRef.current.setPage(pageNumber);
    };

    return (
        <View style={{ flex: 1 }}>
            <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
                <View key="1">
                    <FirstPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(1);
                        }}
                    />
                </View>
                <View key="2">
                    <SecondPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(2);
                        }}
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(0);
                        }}
                    />
                </View>
                <View key="3">
                    <ThirdPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(3)
                        }}
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(1);
                        }}
                    />

                </View>

                <View key="4">
                    <FourthPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Submit"
                        rightButtonPress={() => {
                            navigation.navigate('GetStarted')
                        }}
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(2);
                        }}
                    />

                </View>
            </ViewPager>
        </View>
    );
};

export default Onboarding;
