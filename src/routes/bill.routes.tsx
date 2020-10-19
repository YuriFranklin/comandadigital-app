import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/Home';

const Stack = createStackNavigator();

const Bill: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Bill;
