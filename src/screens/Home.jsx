import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('PostsScreen');
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PostsScreen') {
            iconName = 'grid-outline';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = 'add-outline';
            color = '#fff';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'gray',
      }}
    >
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
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 16, marginTop: 50 }}
              />
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
              <Ionicons
                name="arrow-back"
                size={24}
                color="gray"
                style={{ marginLeft: 20, marginTop: 50 }}
              />
            </Pressable>
          ),
          tabBarLabelStyle: { display: 'none' },
          tabBarIconStyle: {
            backgroundColor: '#FF6C00',
            width: 70,
            height: 40,
            marginTop: 6,
            borderRadius: 20,
            marginBottom: 6,
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

export default Home;
