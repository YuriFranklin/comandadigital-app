import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container>
      <Icon name={icon} size={20} color="#91948C" />
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#91948C"
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
