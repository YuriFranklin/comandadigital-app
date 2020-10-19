import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import light from './styles/themes/light';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={light}>
          <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#9372E7" />
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
