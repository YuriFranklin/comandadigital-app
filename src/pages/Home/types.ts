import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';

export type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
