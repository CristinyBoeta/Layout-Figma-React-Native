import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Inicio from '../screens/Inicio/Inicio';

const Stack = createStackNavigator();

function RotaAutenticacao () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Inicio' component={Inicio} />
    </Stack.Navigator>
  );
};

export default RotaAutenticacao;