import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const PostsScreen = () => {
  return (
    <View
      style={{
        paddingLeft: 16,
        paddingTop: 32,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F6F6F6',
      }}
    >
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
export default PostsScreen;

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
