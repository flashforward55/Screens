import { StyleSheet, Text, View } from 'react-native';
import { PostsScreen } from './src/components/PostsScreen/PostsScreen';

export default function App() {
  return (
    <View style={styles.containerApp} >
      <PostsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});