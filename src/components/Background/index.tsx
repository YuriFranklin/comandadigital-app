import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import bkgImg from '../../assets/background.png';
import bkgImgDark from '../../assets/background-dark.png';
import { Container, BackgroundImg } from './styles';

const Background: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <BackgroundImg source={title === 'light' ? bkgImg : bkgImgDark} />
    </Container>
  );
};

export default Background;
