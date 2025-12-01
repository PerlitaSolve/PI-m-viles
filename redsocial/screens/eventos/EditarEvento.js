import { Text, StyleSheet, View ,ImageBackground,Image,Pressable,TextInput} from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function EditarEvento({navigation}) {

    return (
        <ImageBackground
        style={styles.fondo}
        source={require('../assets/Fondo4.png')}>
            <View style={styles.separador}>
                <Image
                style={styles.logo}
                source={require('../assets/LogoPI.png')}

                />
                <Ionicons name="person-circle-outline" size={60} color='#fff'/>
            </View>
            <View>
            <Text style={styles.texto}>EDITAR EVENTO</Text>
                
            </View>

            <View style={styles.container}>
                <View>
                    <View style={styles.centrarTitulo}>
                     <Text style={styles.label}>Título del Evento</Text>
                    </View>

                     <TextInput
                    
                     style={styles.inputPrincipal}
                     />
                     
                </View>
                    <View style={styles.fila}>
                        
                        <View style={styles.columna}>
                            <View style={styles.iconLocation3}>
                                <Ionicons name="chevron-down-outline" size={20} color="#777"/>
                            </View>
                            <Text style={styles.label}>Categoría</Text>
                            <TextInput
                               
                                style={styles.inputPeqes}
                            />
                        </View>

                        <View style={styles.columna}>
                            <Text style={styles.label}>Fecha</Text>
                            <TextInput
                                placeholder='DD/MM/AAAA'
                                style={styles.inputPeqes}
                                placeholderTextColor='#777'
                            />
                        </View>

                    </View>
                <View styles={styles.columna}>
                    <Text style={styles.labelDescripcion}>Descripcion del Evento</Text>
                    <TextInput
                    style={styles.inputDescripcion}
                    multiline={true}
                    />
                </View>
            <View style={styles.contFotos}>
                <Image
                source={require('../assets/ImagenEventos2.jpeg')}
                style={styles.foto2}
                />
                <Image
                source={require('../assets/imagenEventos1.webp')}
                style={styles.foto1}
                />
                               
            </View>
                <View style={styles.separadoricons}>
                    <TextInput
                    placeholder='Ubicacion'
                    placeholderTextColor='#777'
                    style={styles.inputPeqes}
                    />
                   
                    
                    <View style={styles.iconLocation2}>
                      <Ionicons name="location-outline" size={35} color='#3d3d3dff'/>
                    </View>   
                    <View style={styles.alinear}>
                    <Pressable style={styles.boton1}>
                        <Text style={styles.textoBoton1}>Añadir Foto</Text>
                    </Pressable>                   
                    </View>                 

                   
                    
                    
                </View>
                <Pressable style={styles.boton2}>
                    <Text style={styles.textoBoton}>ACTUALIZAR</Text>
                </Pressable>
                

               
                
            </View>

        </ImageBackground>
    )
  
}

const styles = StyleSheet.create({
    fondo:{
        width:'100%',
        height:'100%',
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        height:'80%',
        width:'80%',
        backgroundColor:'#f8f8f8ff',    
        marginBottom:15,
        borderRadius:25,
        justifyContent:'flex-start',
        alignItems:'center',

    // flex:1,
    },
    separador:{
        flexDirection:'row',
        gap:350,
        marginTop:15,
   },
    separadortexto:{
        flexDirection:'row',
        gap:50,
        marginTop:15,
   },
    separadorinput:{
        flexDirection:'row',
        gap:5,
        marginTop:15,
   },
        logo:{
        height:70,
        width:70,
        zIndex:2,
        marginTop:0,
    },
    texto:{
        fontSize:25,
        fontWeight:'550',
        color:'#fff',
        marginBottom:15,
    },
    inputPrincipal:{
        padding:8,
        width:225,
        backgroundColor:'#e2dedeff',
        borderRadius:10,
        flex:1,
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            width:0,
            height:3,
        },         
    },
    inputPeqes:{
        padding:8,
        width:125,
        backgroundColor:'#e2dedeff',
        borderRadius:10,
        flex:1,
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            width:0,
            height:3,
        },         
    },
    centrarTitulo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:35,
        marginBottom:5,
    },
    fila:{
    flexDirection:'row',
    gap:80,
    marginTop:15,
    },
    labelDescripcion:{
    marginTop:19,
    marginBottom:5,
    fontSize:16.5,
    fontWeight:'500',
    color:'#042674ff',

    },

    columna:{
        flexDirection:'column',
        alignItems:'flex-start',
    },

    label:{
        fontSize:16.5,
        fontWeight:'500',
        marginBottom:5,
        color:'#042674ff',
    },
    inputDescripcion:{
        width:300,
        height:150,
        padding:10,
        backgroundColor:'#e2dedeff',
        borderRadius:10,
        textAlignVertical:'top',
        textAlign:'left',
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            width:0,
            height:3,
        },        
    },
    foto1:{
        width:200,
        height:120,
        backgroundColor:'#6e6e6eff',     
        marginBottom:15,
        overflow:'hidden',
        position:'absolute',  
        right:80,    
        zIndex:9,  
        top:10,
        borderRadius:20,
        shadowColor:'#373636ff',
        shadowOffset:{
            width:3,
            height:3,
        },
    },
    foto2:{
        width:200,
        height:120,
        backgroundColor:'#177246ff',     
        overflow:'hidden',
        position:'absolute',
        left:80,
        zIndex:10,
        borderRadius:20,
        top:-10,
        shadowColor:'#373636ff',
        shadowOffset:{
            width:3,
            height:3,
        },   
    },
    contFotos:{
    width:'100%',
    height:150,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    position:'relative',       
    },
    iconPLus:{
        zIndex:20,
        overflow:'hidden',
        position:'absolute',
        bottom:10,
        right:67,
    },
    separadoricons:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:50,
        marginTop:10, 
        marginLeft:15,      
    },
    iconLocation:{
        overflow:'hidden',
        position:'absolute',
        bottom:1,
        right:5,

    },
    iconLocation2:{
        overflow:'hidden',
        position:'absolute',
        bottom:-2,
        right:172,

    },   
    iconLocation3:{
        overflow:'hidden',
        position:'absolute',
        bottom:4,
        right:2,

    },
    boton2:{
        backgroundColor:'#abb6ffff',
        width:120,
        height:40,
        borderRadius:20,
        paddingVertical:6,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#c7c7c7ff',
        marginTop:20,
        shadowOffset:{
            height:3,
            width:0,
        },
    },
    textoBoton:{
        fontSize:16,
        fontWeight:'500',
        color:'white',
    },
    textoBoton1:{
        fontSize:16,
        fontWeight:'500',
        color:'white',
    },    
    alinear:{
        textAlign:'left',
        justifyContent:'flex-start',
    },
    boton1:{
        backgroundColor:'#5bc86dff',
        width:125,
        height:34,
        borderRadius:10,
        paddingVertical:6,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            height:3,
            width:0,
        },
    },
})