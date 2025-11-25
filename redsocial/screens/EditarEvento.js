import { Text, StyleSheet, View ,ImageBackground,Image,Pressable,TextInput} from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function EditarEvento(){

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
                     <Text>hola</Text>
                    </View>

                     <TextInput
                     placeholder='adios'
                     style={styles.inputPrincipal}
                     />
                     
                </View>
                    <View style={styles.fila}>
                        
                        <View style={styles.columna}>
                            <Text style={styles.label}>Fecha</Text>
                            <TextInput
                                placeholder='Fecha'
                                style={styles.inputPeqes}
                            />
                        </View>

                        <View style={styles.columna}>
                            <Text style={styles.label}>Categoría</Text>
                            <TextInput
                                placeholder='Categoría'
                                style={styles.inputPeqes}
                            />
                        </View>

                    </View>
                <View styles={styles.columna}>
                    <Text style={styles.textoDescripcion}>holaaa</Text>
                    <TextInput
                    style={styles.inputDescripcion}
                    multiline={true}
                    />
                </View>
            <View style={styles.contFotos}>
                <View style={styles.foto1}>
                </View>
                 <View style={styles.foto2}>
                </View>
                <View style={styles.iconPLus}>
                    <Ionicons name="add-circle-outline" size={30} color='#000'/>
                </View>
                               
            </View>
                <View style={styles.separadoricons}>
                    <Ionicons name="calendar-outline" size={25} color='#3d3d3dff'/>
                    <Text style={styles.textoicons}>Sab,25Nov-2026-8:00am</Text>
                </View>
                
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
        padding:10,
        width:200,
        backgroundColor:'#777',
        borderRadius:70,
        flex:1,
    },
    inputPeqes:{
        padding:10,
        width:125,
        backgroundColor:'#777',
        borderRadius:70,
        flex:1,
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
    textoDescripcion:{
    marginTop:19,
    marginBottom:15,
    fontSize:16,
    fontWeight:'500',

    },

    columna:{
        flexDirection:'column',
        alignItems:'flex-start',
    },

    label:{
        fontSize:16,
        fontWeight:'500',
        marginBottom:5,
    },
    inputDescripcion:{
        width:300,
        height:150,
        padding:10,
        backgroundColor:'#777',
        borderRadius:10,
        textAlignVertical:'top',
        textAlign:'left',
    },
    foto1:{
        width:200,
        height:120,
        backgroundColor:'#721717ff',     
        marginBottom:15,
        overflow:'hidden',
        position:'absolute',  
        right:80,    
        zIndex:9,  
        top:10,
        borderRadius:20,
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
        justifyContent:'start',
        alignItems:'center',
        gap:5,
        marginTop:10, 
        marginLeft:15,      
    },

})