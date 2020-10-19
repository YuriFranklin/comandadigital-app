import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';
import HomeScreen from '../pages/Home';
import ITheme from '../styles/themes/types';

const Stack = createStackNavigator();

const Bill: React.FC = () => {
  const { colors } = useContext<ITheme>(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleStyle: {
          color: colors.white,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Bill;
