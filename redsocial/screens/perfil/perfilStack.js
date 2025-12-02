import {createStackNavigator} from '@react-navigation/stack';
import Perfil from './Perfil';
import EdPerfil from './EdPerfil';
const Stack = createStackNavigator();

export default function perfilStackStack(){
    return(
        <Stack.Navigator initialRouteName="Perfil">
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="EdPerfil" component={EdPerfil} />
        </Stack.Navigator>
    )
}