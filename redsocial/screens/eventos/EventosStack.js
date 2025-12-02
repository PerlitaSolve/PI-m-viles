// import {createStackNavigator} from '@react-navigation/stack';
import MisEventos from './MisEventos';
// import EditarEvento from './EditarEvento';
import CrearEvento from './CrearEvento';
import Home from './home';
// import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
// const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();
export default function EventosStack(){
    return(
        // <Stack.Navigator
        //     initialRouteName="MisEventos"
        //     screenOptions={{headerShown: false}}
        // >
        //     <Stack.Screen name="MisEventos" component={MisEventos} />
        //     <Stack.Screen name="EditarEvento" component={EditarEvento} />
        //     <Stack.Screen name="CrearEvento" component={CrearEvento} />
        //     <Stack.Screen name="Home" component={Home} />
        // </Stack.Navigator>
         <Tab.Navigator
                initialRouteName='MisEventos'
                screenOptions={({route})=>({
                    headerShown: false,
                    tabBarIcon:({color, size})=>{
                        let iconName;
                        if(route.name==='MisEventos'){
                            iconName='bookmark-outline';
                        }else if(route.name==='Home'){
                            iconName='home-outline';
                        }else if(route.name==='Crear'){
                            iconName='add-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    },
                    tabBarActiveTinColor: '#007BFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle:{
                        paddingBottom: 5,
                        height: 60,
                    },
                })}
            >
                <Tab.Screen name='MisEventos' component={MisEventos}/>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Crear' component={CrearEvento}/>
                {/* </Tab.Screen> */}
            </Tab.Navigator>
    );
}