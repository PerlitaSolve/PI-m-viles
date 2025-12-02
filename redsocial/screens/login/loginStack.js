import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Registro from './Registro';
import Recuperar from './Contra';
import Sesion from './Sesion';
import EditarEvento from '../eventos/EditarEvento';
import home from '../eventos/home'
import EdPerfil from '../perfil/EdPerfil';
const Stack = createStackNavigator();

export default function LoginStack(){
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="EdPerfil" component={EdPerfil} />
            <Stack.Screen name="EditarEvento" component={EditarEvento} />
            <Stack.Screen name="home" component={home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
            <Stack.Screen name="Recuperar" component={Recuperar} />
            <Stack.Screen name="Sesion" component={Sesion}/>
        </Stack.Navigator>
    )
}