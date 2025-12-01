import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './screens/login/loginStack';
import Sesion from './screens/login/Sesion';
// import Registro from './screens/Registro';
import MisEventos from './screens/MisEventos';
import Notificaciones from './screens/Notificaciones';
// import Contra from './screens/Contra';
import EditarEvento from './screens/EditarEvento';




export default function App() {
  return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
