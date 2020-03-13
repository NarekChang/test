import React from 'react';
import {
  Text,
  View,
  Slider,
  Platform,
  Keyboard,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 25
  },
  row: {
    paddingVertical: 15,
    width: '100%'
  },
  textInput: {
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

const behavior = Platform.select({
  ios: { behavior: 'padding' },
  android: {}
});

export default function MainComp() {
  const KeyboardDismiss = () => {
    Keyboard.dismiss()
  }
  
  return (
    <KeyboardAvoidingView {...behavior}>
      <ScrollView style={styles.wrap}>
        <View style={styles.row}>
          <TextInput
            autoFocus
            key="textInput"
            placeholder="Введите число"
            style={styles.textInput}
          />
        </View>

        <View style={styles.row}>
          <Slider key="sliderInput" onTouchStart={KeyboardDismiss} />
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            key="button"
            activeOpacity={0.5}
            style={styles.button}
            onPress={KeyboardDismiss}
          >
            <Text style={styles.buttonText}>Посчитать</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text>Итог:</Text>
          <TextInput
            key="textResult"
            editable={false}
            style={styles.textInput}
          />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
