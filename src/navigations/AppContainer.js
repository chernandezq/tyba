import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const AppContainer: () => React = () => {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
};

export default AppContainer;
