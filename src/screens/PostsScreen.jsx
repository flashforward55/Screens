import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { UserInfo } from '../components/ComponentsProject';
import { Posts } from '../components/ComponentsProject';
import { posts } from '../data/posts';

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <UserInfo />
        <FlatList
          data={posts}
          renderItem={({ item }) => <Posts item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default PostsScreen;
