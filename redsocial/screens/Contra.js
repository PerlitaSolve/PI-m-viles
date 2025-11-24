import { StyleSheet, Text, View, TextInput, Pressable, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'


export default function Contra() {
  return (
    
        <ImageBackground
            source={require('../assets/Fondo1.png')}
            style={styles.fondo}
        >

            <View style={styles.container}>
                
                    <Image source={require('../assets/LogoPI.png')} style={styles.logo}/>

                <View style={styles.cuadro}>
                    <View>
                        <Text style={styles.titulo}>¿OLVIDATE TU CONTRASEÑA?</Text>
                        <Text style={styles.mensaje}>¡No te preocupes!</Text>
                        <Text style={styles.mensaje}>Recuperemos tu contraseña.</Text>
                        <Text style={styles.mensaje}>Llena los siguientes campos.</Text>
                    </View>
                    <View style={{padding: 10}}></View>
                    <View>
                        <Text style={styles.text}>Correo Electrónico</Text>
                        <TextInput placeholder='@correo' style={styles.input}></TextInput>
                        
                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput placeholder='Contraseña' style={styles.input} secureTextEntry={true}></TextInput>

                        <Text style={styles.text}>Confirmar Contraseña</Text>
                        <TextInput placeholder='Contraseña' style={styles.input} secureTextEntry={true}></TextInput>

                        <Pressable style={styles.boton}>
                            <Text style={styles.bText}>INICIAR SESION</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({
     fondo:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    container2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
    },
    logo:{
        width:100,
        height:100,
        marginBottom:20,
        marginTop: 50,
    },
    titulo:{
        fontSize:24,
        color:'#344284ff',
        marginBottom:20,
        fontFamily:'Josefin Sans',
        textAlign:'center',
    },
    cuadro:{
        backgroundColor:'#ffffffc7',
        padding:20,
        borderRadius:10,
        width:300,
        alignItems:'center',
    },
    input:{
        borderWidth:1,
        borderColor:'#b4b4b4ff',
        backgroundColor:'#d4d4d4ff',
        borderRadius:10,
        padding:10,
        marginBottom:15,
        fontFamily:"Instrument Sans",
        paddingVertical:8,
        paddingHorizontal:40,
    },
    text:{
        fontSize:16,
        color:'#222e6aff',
        alignItems:'flex-start',
        marginBottom:5,
        fontFamily:'Josefin Sans',
    },
    boton:{
        color:'#fff',
        fontSize:14,
        fontFamily:"Instrument Sans",
        backgroundColor:'#80A0EB',
        borderRadius:10,
        marginTop:20,
        textAlign:'center',
        height:45,
        justifyContent:'center',
        alignItems:'center',
    },
    mensaje:{
        fontSize:14,
        color:'#56619bff',
        textAlign:'center',
        marginBottom:5,
        fontFamily:'Josefin Sans',
    },
    bText:{
        color:'#fff',
        fontSize:14,
        fontFamily:"Instrument Sans",
        justifyContent:'center',
        alignItems:'center',
    },
})