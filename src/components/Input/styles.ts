import styled from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 30px;
  background: #f9f9f9;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6202ee;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 8px;
`;
