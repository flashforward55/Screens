import { StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [inputStates, setInputStates] = useState({
    input2: false,
    input3: false,
    showPassword: false,
  });
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = inputKey => {
    setFocusedInput(inputKey);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const isInputFocused = inputKey => {
    return focusedInput === inputKey;
  };
  const toggleShowPassword = () => {
    setInputStates(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword, // Toggle the state when "Показати" is pressed
    }));
  };

  return (
    <View style={styles.containerRegistrationScreen}>
      <Text style={styles.text}>Увійти</Text>
      <TextInput
        style={[styles.input, isInputFocused('input2') && styles.inputFocused]}
        onFocus={() => handleFocus('input2')}
        onBlur={handleBlur}
        placeholder="Адреса електронної пошти"
      />
      <View style={styles.inputView}>
        <TextInput
          style={[
            styles.input,
            styles.inputPassword,
            isInputFocused('input3') && styles.inputFocused,
          ]}
          onFocus={() => handleFocus('input3')}
          onBlur={handleBlur}
          placeholder="Пароль"
          maxLength={15}
          secureTextEntry={!inputStates.showPassword} // Toggle secureTextEntry based on the showPassword state
        />
        <Pressable onPress={toggleShowPassword} style={styles.textAccent}>
          <Text style={styles.textAccent}>
            {inputStates.showPassword ? 'Приховати' : 'Показати'}
          </Text>
        </Pressable>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Увійти</Text>
      </TouchableOpacity>
      <Pressable>
        <Text style={styles.textEnterButton}>Немає акаунту? Зареєструватися</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerRegistrationScreen: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    padding: 16,
  },
  imageAndPlusContainer: {
    alignItems: 'center',
    marginTop: 30,
    maxWidth: '100%',
  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  imageAdd: {
    top: -40,
    left: 60,
  },
  text: {
    color: '#212121',
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
  },
  inputView: {
    width: '100%',
  },
  inputPassword: {
    position: 'relative',
    marginBottom: 16,
  },
  textAccent: {
    position: 'absolute',
    right: 20,
    top: 7,
    color: '#1B4371',
  },
  button: {
    backgroundColor: '#FF6C00',
    paddingHorizontal: 111.5,
    paddingVertical: 16,
    borderRadius: 25,
    height: 51,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
  },
  textEnterButton: {
    color: '#1B4371',
  },
});
