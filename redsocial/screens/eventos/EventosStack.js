import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import MisEventos from './MisEventos';
import Home from './home';
import EditarEvento from './EditarEvento';
const Tab= createBottomTabNavigator();
export default function EventosStack(){
    return(
        // <NavigationContainer>
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
                        }else if(route.name==='EditarEvento'){
                            iconName='create-outline';
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
                <Tab.Screen name='EditarEvento' component={EditarEvento}/>
                {/* </Tab.Screen> */}
            </Tab.Navigator>
        // </NavigationContainer>
    )
}