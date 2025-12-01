import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Registro from './Registro';
import Recuperar from './Contra';
import Sesion from './Sesion';
const Stack = createStackNavigator();

export default function LoginStack(){
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
            <Stack.Screen name="Recuperar" component={Recuperar} />
            <Stack.Screen name="Sesion" component={Sesion}/>
        </Stack.Navigator>
    )
}