import { Text, StyleSheet, View,ScrollView,Pressable,ImageBackground,Image,TextInput, Alert, ActivityIndicator, FlatList} from 'react-native'
import React, { useCallback, useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'

import {EventoController} from '../../Controllers/eventoController';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
const controllerE= new EventoController();
export default function MisEventos({navigation}){
    const [carganding, setCarganding]= useState(true);
    const [eventos, setEventos]= useState([]);
    const [asistentesPorEvento, setAsistentesPorEvento] = useState({});

    const cargarEventos= useCallback(async()=>{
        try{
            setCarganding(true);
            const eventosData= await controllerE.obtenerEventosUsuario();
            setEventos(eventosData);
            console.log(`${eventosData.length} eventos recuperados.`);
        }catch(error){
            Alert.alert('Error: ', error.message);
        }finally{
            setCarganding(false);
        }
    },[controllerE]);

    useEffect(() => {
        const cargarAsistentes = async () => {
            const cantidades = {};
            for (const ev of eventos) {
            const total = await controllerE.getCantidadParticipantes(ev.id_evento);
            cantidades[ev.id_evento] = total;
            }
            setAsistentesPorEvento(cantidades);
        };

        if (eventos.length > 0) {
            cargarAsistentes();
        }
    }, [eventos]);

    useEffect(() => {
        cargarEventos();
    }, []);


    const renderEvento=({item, index})=>(
        <View style={styles.Cuadroevento}>
            <View style={styles.Cuadrointerno}>
                <View style={styles.SupPart}>
                    <Image
                        style={styles.imageneventos}
                        //source={require('../../assets/imagenEventos1.webp')}
                        source={{uri: item.imagen}}
                    />
                </View>
                <View style={styles.SupMed}>
                    <View>
                        {/* //id_evento, id_usuario, nombre, descripcion, ubicacion, fecha, hora, duracion, imagen */}
                        <Text style={styles.textoInternotitulo}>{item.nombre}</Text>
                        <Text style={styles.textoInterno}>{item.descripcion}</Text>
                    </View>
                    <View style={styles.separadoricons}>
                        <Ionicons name="calendar-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>{item.fecha} - {item.hora}</Text>
                    </View>
                    <View style={styles.separadoricons}>
                        <Ionicons name="location-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>{item.ubicacion}</Text>
                    </View>  
                    <View style={styles.separadoricons}> 
                        <Ionicons name="people-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>{asistentesPorEvento[item.id_evento]||0} asistentes</Text>
                    </View >                             
                </View>
                <View style={styles.separadorbotones}>
                    <Pressable style={styles.botonVer}>
                        <Ionicons name="eye-outline" size={22} color='white'/>
                        <Text style={styles.textoBoton}>VER</Text>
                    </Pressable>  
                    <Pressable style={styles.boton}>
                        <Text style={styles.textoBoton}>CANCELAR EVENTO</Text>
                    </Pressable>                      
                </View>
            </View>
        </View>
    )
    return (
        <ImageBackground
        source={require('../../assets/Fondo1.png')}
        style={styles.fondo}
        >
        <View style={styles.separador}>
            <Ionicons name="person-circle-outline" size ={60} color='white'/>  
            <Image
                style={styles.logo}
                source={require('../../assets/LogoPI.png')}
            />       
        </View>
        <Text style={styles.textotitulo}>MIS EVENTOS</Text>   
        <View style={styles.separarTexto}>
            <Text style={styles.texto}>Visualiza los eventos a los que te has unido</Text>
        </View>

        <View style={styles.buscadorContainer}>
            <Ionicons name="search-outline" size={22} color='#000'/>
            <TextInput
                style={styles.buscadorInput}
                placeholder='Buscar Evento'
                placeholderTextColor='#777'
            />
            <Pressable 
                style={styles.recargarButton}
                onPress={cargarEventos}
            >
                <Ionicons name='refresh' size={24}></Ionicons>
            </Pressable>
        </View>
       
        {/* <ScrollView 
            style={{marginTop: 28, borderRadius: 15}}
            contentContainerStyle={{
                borderRadius: 15,
                marginTop: 0,
            }}    
        >
            <View style={styles.Cuadroevento}>
                <View style={styles.Cuadrointerno}>
                    <View style={styles.SupPart}>
                        <Image
                            style={styles.imageneventos}
                            source={require('../../assets/imagenEventos1.webp')}
                        />
                    </View>
                    <View style={styles.SupMed}>
                        <View>
                            <Text style={styles. textoInternotitulo}>Nombre del Evento</Text>
                            <Text style={styles. textoInterno}>Descripcion de Evento</Text>
                        </View>
                        <View style={styles.separadoricons}>
                            <Ionicons name="calendar-outline" size={25} color='#3d3d3dff'/>
                            <Text style={styles.textoicons}>Sab,25Nov-2026-8:00am</Text>
                        </View>
                        <View style={styles.separadoricons}>
                            <Ionicons name="location-outline" size={25} color='#3d3d3dff'/>
                            <Text style={styles.textoicons}>Ubicacion,colonia</Text>
                        </View>  
                        <View style={styles.separadoricons}> 
                            <Ionicons name="people-outline" size={25} color='#3d3d3dff'/>
                            <Text style={styles.textoicons}>0/450 asistentes</Text>
                        </View >                             
                    </View>
                    <View style={styles.separadorbotones}>
                        <Pressable style={styles.botonVer}>
                            <Ionicons name="eye-outline" size={22} color='white'/>
                            <Text style={styles.textoBoton}>VER</Text>
                        </Pressable>  
                        <Pressable style={styles.boton}>
                            <Text style={styles.textoBoton}>CANCELAR EVENTO</Text>
                        </Pressable>                      
                    </View>
                </View>
            </View> */}

            {carganding?(
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={"large"} color={"blue"}/>
                    <Text>Cargando eventos...</Text>
                </View>
            ):(
                <View style={styles.cuadrodeEventos}>
                    <FlatList
                        data={eventos}
                        keyExtractor={(item)=>item.id_evento.toString()}
                        renderItem={renderEvento}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No hay eventos</Text>
                            </View>
                        }
                        contentContainerStyle={eventos.length===0&& styles.emptyList}
                        
                    />
                </View>
            )}

            {/* <View style={styles.Cuadroevento}>            
                <View style={styles.Cuadrointerno}>
                <View style={styles.SupPart}>

                    <Image
                        style={styles.imageneventos}
                        source={require('../../assets/imagenEventos1.webp')}
                    />

                </View>
                <View style={styles.SupMed}>
                    <View>
                    <Text style={styles. textoInternotitulo}>Nombre del Evento</Text>
                    <Text style={styles. textoInterno}>Descripcion de Evento</Text>
                    </View>

                    <View style={styles.separadoricons}>
                        <Ionicons name="calendar-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>Sab,25Nov-2026-8:00am</Text>
                    </View>
                    <View style={styles.separadoricons}>
                        <Ionicons name="location-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>Ubicacion,colonia</Text>
                    </View>  
                    <View style={styles.separadoricons}> 
                        <Ionicons name="people-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>0/450 asistentes</Text>
                    </View >                             
                </View>
                <View style={styles.separadorbotones}>
        
                    <Pressable style={styles.botonVer}>
                    <Ionicons name="eye-outline" size={22} color='white'/>
                        <Text style={styles.textoBoton}>VER</Text>
                    </Pressable>  
                    <Pressable style={styles.boton}>
                        <Text style={styles.textoBoton}>CANCELAR EVENTO</Text>
                    </Pressable>                      
                </View>               

                </View>

            </View>
            <View style={styles.Cuadroevento}>
                <View style={styles.Cuadrointerno}>
                <View style={styles.SupPart}>

                    <Image
                    
                    style={styles.imageneventos}
                    source={require('../../assets/imagenEventos1.webp')}
                    />

                </View>
                <View style={styles.SupMed}>
                    <View>
                    <Text style={styles. textoInternotitulo}>Nombre del Evento</Text>
                    <Text style={styles. textoInterno}>Descripcion de Evento</Text>
                    </View>

                    <View style={styles.separadoricons}>
                        <Ionicons name="calendar-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>Sab,25Nov-2026-8:00am</Text>
                    </View>
                    <View style={styles.separadoricons}>
                        <Ionicons name="location-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>Ubicacion,colonia</Text>
                    </View>  
                    <View style={styles.separadoricons}> 
                        <Ionicons name="people-outline" size={25} color='#3d3d3dff'/>
                        <Text style={styles.textoicons}>0/450 asistentes</Text>
                    </View >                             
                </View>
                <View style={styles.separadorbotones}>
        
                    <Pressable style={styles.botonVer}>
                    <Ionicons name="eye-outline" size={22} color='white'/>
                        <Text style={styles.textoBoton}>VER</Text>
                    </Pressable>  
                    <Pressable style={styles.boton}>
                        <Text style={styles.textoBoton}>CANCELAR EVENTO</Text>
                    </Pressable>                      
                </View>               

            </View>

            </View>         */}
        {/* </ScrollView> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cuadrodeEventos:{
        marginTop: 28,
        borderRadius: 15,
        width: '85%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 20,
        // alignItems:'center',
        // justifyContent: 'center',
    },
    emptyContainer:{
        alignSelf: 'center',
        marginTop: '50%',
    },
    emptyText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    recargarButton:{
        // padding: 8,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 25,
        height: '100%',
        marginRight: 7,
        
    },
    recargarButtonText:{
        color: 'blue',
        fontSize: 15,
    },
    fondo:{
        flex:1,
        height:'100%',
        width:'100%',
        resizeMode:'contain',
        alignItems:'center',
        zIndex:0,
    },
      containerleft:{
        alignContent:'flex-start',

    },
        logo:{
        height:70,
        width:70,
        zIndex:2,
        marginTop:0,
      //  overflow:'hidden',
       // position:'absolute',
        //left:20,
    },
    separadoricons:{
        flexDirection:'row',
        justifyContent:'start',
        alignItems:'center',
        gap:5,
        marginTop:10, 
        marginLeft:15,      
    },
    separador:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:200,
        marginTop:10,
    },
    textotitulo:{
        fontSize:22,
        color:'#fff',
        marginTop:5,
        letterSpacing:.5,
        fontWeight:'550',
    },
    texto:{
        fontSize:16,
        color:'#fff',
        margin:15,
        fontWeight:'400',
    },
    Cuadroevento:{
        width:'95%',
        height:600,
        backgroundColor:'#fff',
        alignItems:'center',
        alignContent:'center',
        margin:15,
        borderRadius:20,
        zIndex:10,
    },
    Cuadrointerno:{ //
        width:'95%',
        height:'95%',
        backgroundColor:'#dbdbdbff',
        alignItems:'center',
        alignContent:'center',
        marginTop:15,
        borderRadius:20, 
        zIndex:11,
        shadowColor:'#7e7c7cff',
        shadowOffset:{
            width:0,
            height:3,
        }
    },
boton:{
    backgroundColor:'#abb6ffff',
    paddingVertical:12,
    width:150,
    borderRadius:20,
    elevation:5,
    shadowColor:'#00000056',
    marginRight:15,
    shadowOffset:{
        width:0,
        height:3,
    },
    alignItems:'center',
    justifyContent:'center',
    marginTop:8,
},
textoBoton:{
    color:'#ffffffff',
    fontSize:15,
    fontWeight:'550',
},  
    separadorbotones:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',         
        marginTop:0,
        gap:15,
    },
    botonVer:{
    flexDirection:'row',
    gap:5,
    backgroundColor:'#aeaeaeff',
    paddingVertical:10,
    width:130,
    margin:15,
    borderRadius:20,
    elevation:5,
    shadowColor:'#00000056',
    shadowOffset:{
        width:0,
        height:3,
    },
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,        
    },
    SupPart:{
        width:'80%',
        height:'35%',
        backgroundColor:'#7e2c2cff',
        marginTop:30,
        marginBottom:15,
        borderRadius:20,
    },
    SupMed:{
        width:'80%',    
        height:'35%',
        marginTop:10,
        backgroundColor:'#dbdbdbff',
      //  backgroundColor:'#17c38fff',    
        borderRadius:20,
    },
    textoInternotitulo:{
        fontSize:17,
        color:'#454545ff',
        marginLeft:8,
        fontWeight:'550',
        marginTop:5,    
      //  justifyContent:'flex-start' ,
    },
     textoInterno:{
        fontSize:14,
        color:'#575757ff',
        marginLeft:8,
        fontWeight:'550',
        marginTop:5,     
       // justifyContent:'flex-end' ,
    },   
    iconMarco:{
        width:55,
        height:55,
        borderRadius:27.5,
        borderWidth:4,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    textoicons:{
        fontSize:15,
        color:'#3a3a3aff',
    },
    imageneventos:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  
    borderRadius: 20,      
},
buscadorContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'70%',
    borderRadius:30,
    borderWidth:2,
    borderColor:'#0099b0ff',
    marginBottom:10,
    top:160,
    gap:5,
    overflow:'hidden',
    position:'absolute',
    zIndex:5,

},
buscadorInput:{
    flex:1,
    fontSize:14,
    fontWeight:'500',
    color:'#333',
    width: '70%',
    // backgroundColor:'red',
},
separarTexto:{
    marginBottom:20,
}
})