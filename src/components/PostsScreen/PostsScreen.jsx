import { RegistrationScreen } from '../RegistrationScreen/RegistrationScreen';
import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../../images/bg.jpg';

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

const styles = StyleSheet.create({
  containerPostsScreen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
