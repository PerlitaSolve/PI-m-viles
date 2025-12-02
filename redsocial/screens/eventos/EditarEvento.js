import { Text, StyleSheet, View ,ImageBackground,Image,Pressable,TextInput, Dimensions, ScrollView} from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window');

export default function EditarEvento({navigation,route}) {
    const { evento } = route.params

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
        style={styles.fondo}
        source={require('../../assets/Fondo4.png')}>
            <View style={styles.separador}>
                <Image
                style={styles.logo}
                source={require('../../assets/LogoPI.png')}

                />
                <Ionicons name="person-circle-outline" size={width > 600 ? 60 : 45} color='#fff'/>
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
                source={require('../../assets/ImagenEventos2.jpeg')}
                style={styles.foto2}
                />
                <Image
                source={require('../../assets/imagenEventos1.webp')}
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
        </ScrollView>
    )}

const styles = StyleSheet.create({
    fondo:{
        width:'100%',
        minHeight:'100%',
        flex:1,
        resizeMode:'cover',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingBottom: 40,
    },
    container:{
        height: '80%',
        width: 350 ,
        backgroundColor:'#f8f8f8ff',    
        marginBottom: 15,
        marginTop:10,
        borderRadius: 25,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical: 20,
    },
    separador:{
        flexDirection:'row',
        gap: 200,
        marginBottom:10,
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
        height:50,
        width: 50,
        zIndex:2,
        marginTop:0,
    },
    texto:{
        fontSize: 20,
        fontWeight:'550',
        color:'#fff',
        marginBottom: 15,
        marginTop: 10,
    },
    inputPrincipal:{
        padding: 4,
        width:300 ,
        backgroundColor:'#e2dedeff',
        borderRadius:15,
        fontSize:12,
        height:30,
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            width:0,
            height:3,
        },         
    },
    inputPeqes:{
        padding: 4,
        width: 140,
        backgroundColor:'#e2dedeff',
        borderRadius:10,
        fontSize: 11,
        height: 30,
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            width:0,
            height:3,
        },         
    },
    centrarTitulo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:  20,
        marginBottom:5,
        width: '100%',
    },
    fila:{
        flexDirection: 'row',
        justifyContent:'center',    
        alignItems:'center',        
        gap: 20,                    
        marginTop: 5,
        width: '100%',              
    },


    labelDescripcion:{
    marginTop:10,
    marginBottom: 2,
    fontSize:  12,
    fontWeight:'500',
    color:'#042674ff',
    },

    columna:{
        flexDirection:'column',
        alignItems:'flex-start',
    },

    label:{
        fontSize:12,
        fontWeight:'500',
        marginBottom:5,
        color:'#042674ff',
    },
    inputDescripcion:{
        width: 300 ,
        height:100, 
        padding:6,
        backgroundColor:'#e2dedeff',
        borderRadius:10,
        textAlignVertical:'top',
        textAlign:'left',
        fontSize: 15,
        shadowColor:'#c0bdbdff',
        shadowOffset:{
            width:0,
            height:3,
        },        
    },
    foto1:{
        width:150,
        height: 90,
        backgroundColor:'#6e6e6eff',     
        marginBottom:15,
        overflow:'hidden',
        position:'absolute',  
        right: 60,    
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
        width: 150,
        height: 90,
        backgroundColor:'#177246ff',     
        overflow:'hidden',
        position:'absolute',
        left: 80,
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
    height: 200,
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
        justifyContent:'center',    
        alignItems: 'center',       
        gap: 15,
        marginTop: 20,
        width: '100%',              
        position: 'relative',
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
        bottom: 80,
        right: 50,

    },   
    iconLocation3:{
        overflow:'hidden',
        position:'absolute',
        bottom:4,
        right:2,

    },
    boton2:{
        backgroundColor:'#abb6ffff',
        width: width > 600 ? 120 : 100,
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
        fontSize:15,
        fontWeight:'500',
        color:'white',
    },
    textoBoton1:{
        fontSize: 12,
        fontWeight:'500',
        color:'white',
    },    
    alinear:{
        textAlign:'left',
        justifyContent:'flex-start',
        width: 130,
    },
    boton1:{
        backgroundColor:'#5bc86dff',
        width: 140,
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