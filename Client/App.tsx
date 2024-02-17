
import React from 'react';
import CheckAuth from './router/CheckAuth';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import theme from './assets/theme/theme';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.primaryMedium} />
      <CheckAuth />
    </NavigationContainer>
  );
}

export default App;

