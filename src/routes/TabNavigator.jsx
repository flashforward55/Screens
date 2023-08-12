import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export const TabNavigator = {
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ color, size, focused }) => {
      let iconName;

      if (route.name === 'PostsScreen') {
        iconName = 'grid-outline';
        color = focused
          ? TabNavigator.tabBarOptions.activeTintColor
          : TabNavigator.tabBarOptions.inactiveTintColor;
      } else if (route.name === 'CreatePostsScreen') {
        iconName = 'add-outline';
        color = '#fff';
      } else if (route.name === 'ProfileScreen') {
        iconName = 'person-outline';
        color = focused
          ? TabNavigator.tabBarOptions.activeTintColor
          : TabNavigator.tabBarOptions.inactiveTintColor;
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#FF6C00',
    inactiveTintColor: 'gray',
  },
};
