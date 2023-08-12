import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import image from '../images/bg.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputStates, setInputStates] = useState({
    input2: false,
    input3: false,
    showPassword: false,
  });
  const [focusedInput, setFocusedInput] = useState(null);
  const navigation = useNavigation();
  const onLogin = () => {
    console.log({ email, password });
    setEmail('');
    setPassword('');
    navigation.navigate('MainNavigator');
  };

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerPostsScreen}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.containerRegistrationScreen}>
            <Text style={styles.text}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={{ width: '100%' }}
            >
              <TextInput
                style={[styles.input, isInputFocused('input2') && styles.inputFocused]}
                value={email}
                onChangeText={setEmail}
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
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus('input3')}
                  onBlur={handleBlur}
                  placeholder="Пароль"
                  maxLength={15}
                  secureTextEntry={!inputStates.showPassword}
                />
                <TouchableOpacity onPress={toggleShowPassword} style={styles.textAccent}>
                  <Text style={styles.textAccent}>
                    {inputStates.showPassword ? 'Приховати' : 'Показати'}
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={styles.textButton}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Registration');
              }}
            >
              <Text style={styles.textEnterButton}>
                Немає акаунту? <Text style={styles.underlineText}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerPostsScreen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerRegistrationScreen: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
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
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    height: 51,
    marginTop: 27,
    marginBottom: 16,
    justifyContent: 'center',
    width: '100%',
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 18.75,
  },
  textEnterButton: {
    color: '#1B4371',
    paddingBottom: 160,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});
