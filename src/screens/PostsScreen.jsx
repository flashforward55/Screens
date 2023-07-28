import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../images/bg.jpg';
import RegistrationScreen from './RegistrationScreen';

const PostsScreen = () => {
  return (
    <>
      <View style={styles.containerPostsScreen}>
        <ImageBackground source={image} style={styles.image}>
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </>
  );
};

export default PostsScreen;
const styles = StyleSheet.create({
  containerPostsScreen: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});
