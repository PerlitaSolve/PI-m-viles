import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Button } from 'react-native'
import React, {useState}from 'react'

export default function Login({navigation}) {
  return (
    <ImageBackground
        source={require('../../assets/Fondo1.png')}
        style={styles.fondo}
    >
        <View>
            <View style={styles.container}>
             <Image source={require('../../assets/LogoPI.png') } style={styles.logo}/>
             <Text style={styles.mensaje}>"Explora eventos increíbles,</Text>
             <Text style={styles.mensaje}>conoce personas con tus</Text>
             <Text style={styles.mensaje}>mismos interese y crea</Text>
             <Text style={styles.mensaje}>experiencias inolvidables en</Text>
             <Text style={styles.mensaje}>tu universidad"</Text>
            </View>

            <View style={styles.container2}>
                <Pressable style={styles.boton1} onPress={()=>navigation.navigate('Sesion')}><Text style={styles.textButton}>INICIAR SESIÓN</Text></Pressable>
                <Pressable style={styles.boton} onPress={()=> navigation.navigate('Registro')}><Text  style={styles.textButton}>REGISTRARSE</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Recuperar')} style={{marginTop:12}}>
                    <Text style={{color:'#fff', textDecorationLine:'underline'}}>¿Olvidaste tu contraseña?</Text>
                </Pressable>
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
    mensaje:{
        fontSize:18,
        color:'#fff',
        textAlign:'center',
        marginBottom:10,
        fontFamily:'Josefin Sans',
        marginTop: -5,
    },
    boton1:{
        backgroundColor:'#80A0EB',
        paddingVertical:15,
        paddingHorizontal:50,
        borderRadius:30,
        color:'#fff',
        fontSize:14,
        fontFamily:"Instrument Sans",
    },
    boton:{
        paddingVertical:15,
        paddingHorizontal:100,
       
    },
    textButton:{
        color:'#fff',
        fontSize:14,
        fontFamily:"Instrument Sans",
    }

})