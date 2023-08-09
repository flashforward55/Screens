import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CreatePostsScreen = () => {
  return (
    <View style={{ paddingTop: 32, marginLeft: 'auto', marginRight: 'auto' }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.circle}>
          <Entypo name="camera" size={24} color="black" style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#BDBDBD', marginBottom: 32 }}>Завантажте фото</Text>
      <TextInput placeholder="Назва..." style={styles.input} />
      <View>
        <TextInput placeholder="Місцевість..." style={[styles.input, styles.inputWithMap]} />

        <EvilIcons name="location" size={30} color="black" style={styles.imageMap} />
      </View>
      <TouchableOpacity style={styles.button} disabled>
        <Text style={{ color: '#BDBDBD', fontSize: 16 }}>Опубліковати</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonTrash}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    width: 343,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 8,
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
    backgroundColor: '#fff',
    width: 343,
    paddingHorizontal: 120,
    paddingVertical: 16,
    borderRadius: 100,
    height: 51,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    marginBottom: 110,
    justifyContent: 'center',
  },
  buttonTrash: {
    backgroundColor: '#fff',
    width: 70,
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
});
