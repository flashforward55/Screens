import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image, Text, TextInput, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const CreatePostsScreen = () => {
  return (
    <View style={{ paddingTop: 32, marginLeft: 'auto', marginRight: 'auto' }}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Entypo name="camera" size={24} color="black" style={styles.image} />
        </View>
      </View>
      <Text style={{ color: '#BDBDBD', marginBottom: 32 }}>Завантажте фото</Text>
      <TextInput placeholder="Назва..." style={styles.input} />
      <View>
        <TextInput placeholder="Місцевість..." style={[styles.input, styles.inputWithMap]} />

        <EvilIcons name="location" size={24} color="black" style={styles.imageMap} />
      </View>
      <Pressable style={styles.button} disabled>
        <Text style={{ color: '#BDBDBD', fontSize: 16 }}>Опубліковати</Text>
      </Pressable>
      <Pressable style={styles.buttonTrash}>
        <Feather name="trash" size={24} color="black" />
      </Pressable>
    </View>
  );
};
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
    top: 20,
    left: 20,
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
    top: 13,
    left: 0,
  },
  button: {
    backgroundColor: '#F6F6F6',
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
    backgroundColor: '#F6F6F6',
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
