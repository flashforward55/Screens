import PostsScreen from '../screens/PostsScreen';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigator from './BottomNavigator';

const Tabs = createBottomTabNavigator();

const MainNavigator = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('PostsScreen');
  }, []);

  return (
    <Tabs.Navigator screenOptions={BottomNavigator.screenOptions}>
      <Tabs.Screen
        name="PostsScreen"
        options={{
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerStyle: { height: 100 },
          headerTitleStyle: {
            marginTop: 50,
          },
          tabBarLabelStyle: { display: 'none' },
          tabBarActiveTintColor: 'gray',
          headerRight: () => (
            <Pressable onPress={() => alert('You have just loged out!')}>
              <Feather name="log-out" size={24} color="#BDBDBD" style={styles.feather} />
            </Pressable>
          ),
        }}
        component={PostsScreen}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        options={{
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerStyle: { height: 100 },
          headerTitleStyle: { marginTop: 50 },
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('PostsScreen')}>
              <Ionicons name="arrow-back" size={24} color="gray" style={styles.arrowback} />
            </Pressable>
          ),
          tabBarLabelStyle: { display: 'none' },
          tabBarIconStyle: {
            backgroundColor: '#FF6C00',
            width: 70,
            height: 40,
            marginTop: 5,
            borderRadius: 20,
            marginBottom: 5,
          },
        }}
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{ title: '', headerStyle: { height: 0 }, tabBarLabelStyle: { display: 'none' } }}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  feather: { marginRight: 16, marginTop: 50 },
  arrowback: { marginLeft: 20, marginTop: 50 },
});

export default MainNavigator;
