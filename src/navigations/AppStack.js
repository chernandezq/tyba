import React from 'react';
import Login from '../screens/login';
import Registro from '../screens/register';
import Restaurantes from '../screens/restaurants';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack: () => React = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Ingresa a tu cuenta',
          headerStyle: {
            backgroundColor: '#18A283',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
          },
        }}
      />

      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          title: 'Registro',
          headerStyle: {
            backgroundColor: '#18A283',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
          },
        }}
      />

      <Stack.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          title: 'Listado restaurantes',
          headerStyle: {
            backgroundColor: '#18A283',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignItems: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
