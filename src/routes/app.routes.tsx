import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from 'styled-components';
import BillRoutes from './bill.routes';

const Main: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'lens';
          const iconSize = focused ? size * 1.2 : size;

          switch (route.name) {
            case 'Contas':
              iconName = focused ? 'receipt-long' : 'receipt-long';
              break;
            case 'Perfil':
              iconName = focused ? 'person' : 'person';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.primarylight,
      }}
    >
      <Tab.Screen name="Contas" component={BillRoutes} />
      <Tab.Screen name="Perfil" component={BillRoutes} />
    </Tab.Navigator>
  );
};

export default Main;
