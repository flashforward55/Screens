import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

export const PostsScreen = () => {
  return (
    <View style={{ paddingLeft: 16, paddingTop: 32 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}></View>
        <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Text>Name</Text>
          <Text>Email</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
  },
});
