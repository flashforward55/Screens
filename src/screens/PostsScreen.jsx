import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import image from '../images/bg.jpg';
import RegistrationScreen from './RegistrationScreen';
/* import LoginScreen from './LoginScreen'; */

const PostsScreen = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerPostsScreen}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <RegistrationScreen />
            {/* <LoginScreen /> */}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: 'flex-end',
  },
});
