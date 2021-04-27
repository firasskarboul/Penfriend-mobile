import React, { useState } from 'react'
import { StyleSheet, View, Text, Platform, Button, Dimensions } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const ThirdPage = () => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={styles.title}>Birthday</Text>
      </View>

      <View style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={{
            width: Dimensions.get('window').width - 80,
          }}
          textColor='white'
          maximumDate={new Date(2020, 11, 31)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07689f'
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

  title: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'WTR',
    color: '#81ecec',
    letterSpacing: 3
  },

  gender: {
    fontSize: 30,
    fontFamily: 'WTR',
    color: '#dfe6e9',
    letterSpacing: 3
  }
})

export default ThirdPage;