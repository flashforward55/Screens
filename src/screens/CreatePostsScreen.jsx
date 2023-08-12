import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CreatePostsScreen = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const isButtonActive = title !== '' && location !== '';

  return (
    <View style={styles.createPostsContainer}>
      <View style={styles.wrapperContainer}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.circle}>
            <Entypo name="camera" size={24} color="black" style={styles.image} />
          </TouchableOpacity>
        </View>
        <Text style={styles.uploadPhoto}>Завантажте фото</Text>
        <TextInput
          placeholder="Назва..."
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <View>
          <View style={styles.inputWithMapContainer}>
            <TextInput
              placeholder="Місцевість..."
              style={[styles.input, styles.inputWithMap]}
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <EvilIcons name="location" size={30} color="black" style={styles.imageMap} />
        </View>
        <TouchableOpacity
          style={[styles.button, isButtonActive ? styles.activeButton : null]}
          disabled={!isButtonActive}
        >
          <Text style={[styles.buttonText, isButtonActive ? styles.activeButtonText : null]}>
            Опубліковати
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTrash}>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createPostsContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#F6F6F6',
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapperContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  inputWithMapContainer: {
    position: 'relative',
  },
  cameraContainer: {
    backgroundColor: '#F6F6F6',
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  circle: {
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 17,
    left: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    height: 50,
    paddingBottom: 10,
    paddingTop: 16,
    fontSize: 16,
  },
  inputWithMap: {
    paddingLeft: 28,
    position: 'relative',
  },
  imageMap: {
    position: 'absolute',
    top: 15,
    left: 0,
  },
  button: {
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    height: 51,
    marginTop: 32,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },

  buttonTrash: {
    backgroundColor: '#F6F6F6',
    width: 70,
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
    justifyContent: 'flex-end',
  },
  activeButton: {
    backgroundColor: '#FF6C00',
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
  },
  activeButtonText: {
    color: '#fff',
  },
  uploadPhoto: {
    color: '#BDBDBD',
    marginBottom: 52,
  },
});

export default CreatePostsScreen;
