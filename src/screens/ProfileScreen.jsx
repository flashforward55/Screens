import React from 'react';
import { ImageBackground, View, Image, Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import image from '../images/bg.jpg';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: !isFocused,
    });
  }, [isFocused, navigation]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={[styles.container, { height: 549, paddingTop: 92 }]}>
        <View style={styles.imageAndPlusContainer}>
          <View style={styles.imageContainer}></View>
          <AntDesign name="pluscircleo" size={22} style={styles.imageAdd} color="#FF6C00" />
        </View>
        <Pressable onPress={() => alert('You have just loged out!')}>
          <AntDesign
            name="logout"
            size={24}
            color="black"
            style={{ position: 'absolute', right: 16, top: -70 }}
          />
        </Pressable>
        <Text style={styles.text}>Name</Text>
      </View>
    </ImageBackground>
  );
};
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
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
  text: {
    fontSize: 30,
    marginBottom: 92,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
