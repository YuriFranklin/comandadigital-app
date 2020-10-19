import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';

const Stack = createStackNavigator();

const Auth: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

export default Auth;
