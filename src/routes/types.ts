import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
};
export type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
