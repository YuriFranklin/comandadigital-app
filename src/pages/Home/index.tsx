import React, { useLayoutEffect } from 'react';
import { Button } from 'react-native';
import Background from '../../components/Background';
import {
  HomeScreenNavigationProps,
  HomeScreenRouteProps,
} from '../../routes/types';

import { Container } from './styles';

type Props = {
  route: HomeScreenRouteProps;
  navigation: HomeScreenNavigationProps;
};

const Home: React.FC<Props> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Contas',
      headerRight: () => {},
    });
  }, [navigation]);

  return (
    <Container>
      <Background />
    </Container>
  );
};

export default Home;
