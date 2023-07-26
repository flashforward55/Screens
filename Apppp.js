import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import add from './images/add.png';
import image from './images/bg.jpg';

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
    justifyContent: 'flex-end',
  },
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageContainer: {
    position: 'absolute',
    left: 128,
    top: -60,
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  imageAdd: {
    position: 'absolute',
    top: 21,
    right: 130,
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
    width: 343,
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
  inputFocused: {
    borderColor: '#FF6C00',
  },
  textAccent: {
    position: 'absolute',
    right: 35,
    top: 16,
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
    <View style={[styles.container, { height: 549, paddingTop: 92 }]}>
      <View style={styles.imageContainer}></View>
      <Image source={add} style={styles.imageAdd} />
      <Text style={styles.text}>Реєстрація</Text>
      <TextInput
        style={[styles.input, inputStates.input1 && styles.inputFocused]}
        onFocus={() => handleFocus('input1')}
        onBlur={() => handleBlur('input1')}
        placeholder="Логін"
      />
      <TextInput
        style={[styles.input, inputStates.input2 && styles.inputFocused]}
        onFocus={() => handleFocus('input2')}
        onBlur={() => handleBlur('input2')}
        placeholder="Адреса електронної пошти"
      />
      <View>
        <TextInput
          style={[styles.input, styles.inputPassword, inputStates.input3 && styles.inputFocused]}
          onFocus={() => handleFocus('input3')}
          onBlur={() => handleBlur('input3')}
          placeholder="Пароль"
          maxLength={15}
        />
        <Text style={styles.textAccent}>Показати</Text>
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
        <Text style={styles.textButton}>Увійти</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textEnterButton}>Немає акаунту? Зареєструватися</Text>
      </Pressable>
    </View>
  );
};

