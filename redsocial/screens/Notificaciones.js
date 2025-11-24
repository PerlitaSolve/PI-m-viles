import { Text, StyleSheet, View, ImageBackground,Image,Pressable,Switch } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
export default function Notificaciones(){


    return (
        <ImageBackground
        style={styles.fondo}
        source={require('../assets/Fondo1.png')}        
        >
            <View style={styles.separador}>
                <Ionicons name="person-circle-outline" size={60} color='#fff'/>
                <Image               
                source={require('../assets/LogoPI.png')} 
                style={styles.logo}              
                />
             
            </View>
            <Text style={styles.textititulo}>Notificaciones</Text>

            <View style={styles.container}>
                
                <View style={styles.containerint} >

                    <View style={styles.alineartexto}>  

                    <View style={styles.separadorNoti}>

                        <Text style={styles.texto}>Notificaciones</Text>

                       <View style={styles.alinear}>
                         <Switch
                         
                         />
                       </View>
                       
                       
                    </View>
                    <View style={styles.separadorNoti}>

                        <Text style={styles.texto}>Recordatorios</Text>

                       <View style={styles.alinear}>
                         <Switch
                         
                         />
                       </View>
                       
                       
                    </View>
                    <View style={styles.separadorNoti}>

                        <Text style={styles.texto}>Actualizaciones</Text>

                       <View style={styles.alinear}>
                         <Switch
                

                         />
                       </View>
                       
                       
                    </View>  
                    <View style={styles.separadorNoti}>

                        <Text style={styles.texto}>Notificar Eventos</Text>

                       <View style={styles.alinear}>
                         <Switch
                         
                         />
                       </View>
                       
                       
                       
                    </View>

                    <View style={styles.alinearBoton}>

                        <Pressable style={styles.boton}>
                            <Text style={styles.textoBoton}>GUARDAR</Text>
                        </Pressable>  

                    </View>
                    

                    </View>

                </View>
                
            </View>
        </ImageBackground>
    )
  
}

const styles = StyleSheet.create({
    fondo:{
        resizeMode:'cover',
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:60,
    },
    container:{
        height:'70%',
        width:'80%',
        backgroundColor:'#b1b0b0ff',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'30%',
    },
    containerint:{
        height:'97%',
        width:'95%',
        backgroundColor:'#e4e4e4ff',
        borderRadius:30, 
        justifyContent:'flex-start',
        alignItems:'left',
        shadowColor:'#5f5f5fff',
        shadowOffset:{
            width:0,
            height:4,
        }     
    },
    separador:{
        flexDirection:'row',
        gap:350,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
    },
        logo:{
        height:70,
        width:70,
        zIndex:2,
        marginTop:0,
    },
    textititulo:{
        fontSize:30,
        fontWeight:'550',
        marginBottom:30,
        marginTop:30,
        color:'#fff',
    },
    alineartexto:{
        marginLeft:35,
        marginTop:70,
    },
    separadorNoti:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'85%',
        marginBottom:30,
        
    },
    texto:{
        fontSize:20,
        fontWeight:'400',
        color:'#00166fff',
        lineheight:20,
        marginTop:3,
    },
    alinear:{
        marginTop:5,
        zIndex:0,
        transform:[{scale:.9}],
    },
    boton:{
    backgroundColor:'#abb6ffff',
    paddingVertical:12,
    width:150,
    borderRadius:50,
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
    textoBoton:{
        color:'#ffffffff',
        fontSize:15,
        fontWeight:'550',
    },  
    alinearBoton:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:30,
        marginTop:50,

    }    
})