import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import React from 'react';

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Registration"
            options={{
              title: '',
              headerStyle: {
                height: 0,
              },
            }}
            component={RegistrationScreen}
          />
          <MainStack.Screen
            name="Login"
            options={{
              title: '',
              headerStyle: {
                height: 0,
              },
            }}
            component={LoginScreen}
          />
          <MainStack.Screen
            name="Home"
            options={{ title: '', headerLeft: null, headerStyle: { height: 0 } }}
            component={Home}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}
