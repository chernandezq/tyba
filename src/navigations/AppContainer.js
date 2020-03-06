import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AppStack';
import AppStack from './AppStack';

const AppContainer: () => React = () => {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
};

export default AppContainer;
