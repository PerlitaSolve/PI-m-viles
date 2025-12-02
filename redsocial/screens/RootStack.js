import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventosStack from './eventos/EventosStack';
import perfilStack from './perfil/perfilStack';
import loginStack from './login/loginStack';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginStack" component={loginStack} />
      <Stack.Screen name="EventosStack" component={EventosStack} />
      <Stack.Screen name="PerfilStack" component={perfilStack} />
    </Stack.Navigator>
  )
}
