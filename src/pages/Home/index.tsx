import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import {
  HomeScreenNavigationProps,
  HomeScreenRouteProps,
} from '../../routes/types';

type Props = {
  route: HomeScreenRouteProps;
  navigation: HomeScreenNavigationProps;
};

const Home: React.FC<Props> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Contas',
      headerRight: () => <Button onPress={() => console.log('Clicked')} />,
    });
  }, [navigation]);

  return <View style={{ backgroundColor: '#000', flex: 1 }} />;
};

export default Home;
