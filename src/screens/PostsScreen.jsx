import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export const PostsScreen = () => {
  return (
    <View style={{ paddingLeft: 16, paddingTop: 32 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}></View>
        <View style={styles.imageAndPlusContainer}>
          <View style={styles.imageContainer}></View>
          <AntDesign name="pluscircleo" size={22} style={styles.imageAdd} color="#FF6C00" />
        </View>
        <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Text>Name</Text>
          <Text>Email</Text>
        </View>
      </View>
    </View>
  );
};

//export default PostsScreen;
const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  imageAndPlusContainer: {
    alignItems: 'center',
    marginTop: 30,
    maxWidth: '100%',
    marginTop: -75,
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
});
