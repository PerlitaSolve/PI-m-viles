import {createStackNavigator} from '@react-navigation/stack';
import MisEventos from './MisEventos';
import EditarEvento from './EditarEvento';
import CrearEvento from './CrearEvento';
import Home from './home';

const Stack = createStackNavigator();

export default function EventosStack(){
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="MisEventos" component={MisEventos} />
            <Stack.Screen name="EditarEvento" component={EditarEvento} />
            <Stack.Screen name="CrearEvento" component={CrearEvento} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}