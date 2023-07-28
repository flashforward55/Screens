import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import PostsScreen from './src/screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.containerApp}>
      <PostsScreen style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Bold', // Apply the font family to the PostsScreen component here
  },
});
