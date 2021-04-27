import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const FirstPage = () => {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#07689f'
      }}
    >
      <View style={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={styles.title}>Personal Information</Text>
      </View>

      <KeyboardAvoidingView style={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
        behavior="padding"
        enabled
      >

        <TextInput
          style={styles.inputText}
          onChangeText={firstName => setSignUpForm({ firstName: firstName })}
          placeholder='First Name'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={lastName => setSignUpForm({ lastName: lastName })}
          placeholder='Last Name'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={email => setSignUpForm({ email: email })}
          placeholder='Email'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
          keyboardType='email-address'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={lastName => setSignUpForm({ lastName: lastName })}
          placeholder='Phone Number'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
          keyboardType={Platform.OS == 'ios' ? 'phone-pad' : 'numeric'}
        />

        <TextInput
          style={styles.inputText}
          onChangeText={password => setSignUpForm({ password: password })}
          placeholder='Password'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
          secureTextEntry
        />

      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    width: Dimensions.get('window').width - 80,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 25,
    marginBottom: 15
  },

  title: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'WTR',
    color: '#81ecec',
    letterSpacing: 3
  },
})

export default FirstPage;