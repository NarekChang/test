import React, { useState } from 'react';
import {
  Text,
  View,
  Slider,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

const NUM_REGEX = /^\d+$/;
const behavior = Platform.select({
  ios: { behavior: 'padding' },
  android: {}
});

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 25
  },
  row: {
    paddingVertical: 15,
    width: '100%'
  },
  textInput: {
    color: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#147EFB',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#147EFB'
  },
});

//не подключал типизацию flow, не успевал :(
export default function MainComp() {
  const [arg1, setArg1] = useState('0');
  const [arg2, setArg2] = useState(0);
  const [result, seResult] = useState('');

  const changeArg1 = amount => {
    if (NUM_REGEX.test(amount) || amount === '') setArg1(amount);
  };

  const changeArg2 = amount => {
    setArg2(Math.round(amount));
  };

  const getResult = () => {
    const multiplication = Number(arg1) * arg2;

    seResult(multiplication.toString());
  };
  
  return (
    <KeyboardAvoidingView {...behavior}>
      <ScrollView style={styles.wrap}>
        <View style={styles.row}>
          <TextInput
            autoFocus
            value={arg1}
            key="textInput"
            keyboardType="number-pad"
            placeholder="Введите число"
            style={styles.textInput}
            onChangeText={changeArg1}
          />
        </View>

        <View style={styles.row}>
          <Text>{arg2}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            key="sliderInput"
            onValueChange={changeArg2}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            key="button"
            activeOpacity={0.5}
            style={styles.button}
            onPress={getResult}
          >
            <Text style={styles.buttonText}>Посчитать</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text>Итог:</Text>
          <TextInput
            value={result}
            key="textResult"
            editable={false}
            style={styles.textInput}
          />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
