import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './screens/login/loginStack';
import React, { useEffect } from 'react';
import { LoginController } from './Controllers/loginCotroller';
const controller= new LoginController();
import Menu from './screens/Menu'
import Notificaciones from './screens/Notificaciones';

// PERFIL
import Perfil from './screens/perfil/Perfil'
import EdPerfil from './screens/perfil/EdPerfil'
import perfilStack from './screens/perfil/perfilStack'

// LOGIN
import Contra from './screens/login/Contra'
import Login from './screens/login/Login'
import loginStack from './screens/login/loginStack'
import Registro from './screens/login/Registro'
import Sesion from './screens/login/Sesion';

// EVENTOS
import EditarEvento from './screens/eventos/EditarEvento';
import MisEventos from './screens/eventos/MisEventos';
import EventosStack from './screens/eventos/EventosStack'
import CrearEvento from './screens/eventos/CrearEvento';



export default function App() {
  useEffect(() => {
    (async () => {
      try {
        await controller.initialize();
        console.log('Base de datos inicializada');
      } catch (error) {
        console.error('Error inicializando BD:', error);
      }
    })();
  }, []);
  return (
      <NavigationContainer>
        <LoginStack />
        {/* <EventosStack/> */}
      </NavigationContainer>
  );
}
