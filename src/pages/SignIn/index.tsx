import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
  TextInput,
} from 'react-native';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';
import { signInRequest } from '../../store/modules/auth/actions';
import { AuthState } from '../../store/modules/auth/types';

interface State {
  auth: AuthState;
}

const SignIn: React.FC = () => {
  const { loadingSignInRequest } = useSelector((state: State) => state.auth);

  const passwordInputRef = useRef<TextInput>(null);
  const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<string>('');

  const dispatch = useDispatch();
  const { height } = Image.resolveAssetSource(logoImg);

  const logoHeight = new Animated.Value(height);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        return Animated.timing(logoHeight, {
          duration: event.duration,
          toValue: height * 0.4,
          useNativeDriver: false,
        }).start();
      },
    );

    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardDidHide',
      (event) => {
        return Animated.timing(logoHeight, {
          duration: event.duration,
          toValue: height,
          useNativeDriver: false,
        }).start();
      },
    );

    return () => {
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
    };
  }, []);

  const handleSignIn = useCallback(() => {
    dispatch(
      signInRequest({
        login,
        password,
      }),
    );
  }, [login, password, dispatch]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Background />
            <Animated.Image
              style={{
                aspectRatio: 5,
                resizeMode: 'contain',
                height: logoHeight,
              }}
              source={logoImg}
            />
            <View>
              <Title margin="20">Faça seu login</Title>
            </View>
            <View
              style={{
                marginLeft: 16,
                marginRight: 16,
              }}
            >
              <Input
                onChangeText={setLogin}
                icon="person"
                placeholder="Login"
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                onChangeText={setPassword}
                ref={passwordInputRef}
                secureTextEntry
                icon="lock"
                placeholder="Password"
                onSubmitEditing={handleSignIn}
              />
            </View>
            <Button
              loading={loadingSignInRequest}
              onPress={() => handleSignIn()}
              style={{ width: '50%' }}
            >
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
