import { createStackNavigator } from "@react-navigation/stack";
import EditarEvento from './EditarEvento';
import MisEventos from './MisEventos';
const Stack= createStackNavigator();
export default function EventosStack(){
    return(
        <Stack.Navigator initialRouteName="MisEventos"></Stack.Navigator>
    )
}