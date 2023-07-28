import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import image from './bg.jpg';

//App.js
export default function App() {
  return (
    <View style={styles.containerApp} >
      <PostsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerPostsScreen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center', // Center children horizontally
    padding: 16, // Add padding for spacing from screen edges
  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  imageAndPlusContainer: {
    alignItems: 'center', // Center children horizontally
    marginTop: 30, // Adjust the margin as needed
    maxWidth: '100%', // Set the maximum width to the screen's width
  },
  imageAdd: {
    top: -40,
    left: 60,
  },
  text: {
    color: '#212121',
    fontWeight: '500',
    fontSize: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 32,
  },
  input: {
    width: '100%', // Take the full available width within the parent container
    maxWidth: 343, // Set a maximum width for the input
    height: 50,
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  inputView: {
    width: '100%',
  },
  inputFocused: {
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF', // Add this line to change the background color when focused
  },
  textAccent: {
    position: 'absolute',
    right: 20,
    top: 7,
    color: '#1B4371',
  },
  inputPassword: {
    position: 'relative',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF6C00',
    paddingHorizontal: 111.5,
    paddingVertical: 16,
    borderRadius: 25,
    height: 51,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  plusIcon: {
    marginTop: 21, // Adjust the margin as needed
  },
});

//PostsScreen.js
export const PostsScreen = () => {
  return (
    <>
      <View style={styles.containerPostsScreen}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </>
  );
};

//RegistrationScreen.js
export const RegistrationScreen = () => {
  const [inputStates, setInputStates] = useState({
    input1: false,
    input2: false,
    input3: false,
    showPassword: false, // State to track whether the password should be shown in plain text or obscured
  });
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputKey) => {
    setFocusedInput(inputKey);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const isInputFocused = (inputKey) => {
    return focusedInput === inputKey;
  };
  const toggleShowPassword = () => {
    setInputStates(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword, // Toggle the state when "Показати" is pressed
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageAndPlusContainer}>
        <View style={styles.imageContainer}></View>
        <AntDesign name="pluscircleo" size={22} style={styles.imageAdd} color="#FF6C00" />
      </View>
      <Text style={styles.text}>Реєстрація</Text>
      <TextInput
        style={[styles.input, isInputFocused('input1') && styles.inputFocused]}
        onFocus={() => handleFocus('input1')}
        onBlur={handleBlur}
        placeholder="Логін"
      />
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
          <Text style={styles.textAccent}>{inputStates.showPassword ? 'Приховати' : 'Показати'}</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Зареєструватися</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textEnterButton}>Вже є акаунт? Увійти</Text>
      </Pressable>
    </View>
  );
};

//LoginScreen.jsx
export const LoginScreen = () => {
  const [inputStates, setInputStates] = useState({
    input1: false,
    input2: false,
  });

  const handleFocus = inputKey => {
    setInputStates(prevState => ({
      ...prevState,
      [inputKey]: true,
    }));
  };

  const handleBlur = inputKey => {
    setInputStates(prevState => ({
      ...prevState,
      [inputKey]: false,
    }));
  };

  return (
    <View style={[styles.container, { height: 489, paddingTop: 32 }]}>
      <Text style={styles.text}>Увійти</Text>
      <TextInput
        style={[styles.input, inputStates.input1 && styles.inputFocused]}
        onFocus={() => handleFocus('input1')}
        onBlur={() => handleBlur('input1')}
        placeholder="Адреса електронної пошти"
      />
      <View>
        <TextInput
          style={[styles.input, styles.inputPassword, inputStates.input2 && styles.inputFocused]}
          onFocus={() => handleFocus('input2')}
          onBlur={() => handleBlur('input2')}
          placeholder="Пароль"
          maxLength={15}
        />
        <Text style={styles.textAccent}>Показати</Text>
      </View>
      <Pressable style={styles.button}>
        <Text >Увійти</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textEnterButton}>Немає акаунту? Зареєструватися</Text>
      </Pressable>
    </View>
  );
};
