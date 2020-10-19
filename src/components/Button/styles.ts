import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background: #9b51e0;
  border-radius: 20px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
`;
