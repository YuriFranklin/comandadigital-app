import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface TitleProps {
  margin: string;
}

export const Title = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
  color: #6202ee;
  font-family: 'RobotoSlab-Medium';
  margin: ${(props: TitleProps) => props.margin}px 0 24px;
`;
