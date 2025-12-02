import { StyleSheet, Text, View, Image, ImageBackground, Pressable, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MisEventos from '../eventos/MisEventos'
import { LoginController } from '../../Controllers/loginCotroller';
const controller = new LoginController();
export default function Sesion({navigation}) {
    const [logueado, setLogueado] = useState(false);
    const [email, setEmail]= useState('');
    const [pwd, setPwd]= useState('');
    useEffect(()=>{
        (async()=>{
            await controller.initialize();
        })();
    }, []);
    const loguear= async()=>{
        try{
            const usuarioALoguear= await controller.iniciarSesion(email, pwd);
            if(usuarioALoguear){
                setLogueado(true);
            }
        }catch(error){
            Alert.alert(error.message);
        }
    }
    
  return (
    <>
        {logueado?(
            <MisEventos/>
        ):(

   
            <ImageBackground
                source={require('../../assets/Fondo1.png')}
                style={styles.fondo}
            >
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Image style={styles.logo} source={require('../../assets/LogoPI.png')}/>
                        <View style={styles.cuadro}>
                            <Text style={styles.titulo}>INICIAR SESIÓN</Text>
                            <Text style={styles.text}>Correo Electrónico</Text>
                            <TextInput placeholder='Ejemplo@' style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                            
                            <Text style={styles.text}>Contraseña</Text>
                            <TextInput placeholder='Ejemplo@' style={styles.input} secureTextEntry={true}
                                value={pwd}
                                onChangeText={setPwd}
                            />
                            <Pressable style={styles.boton1} onPress={()=>navigation.navigate('Recuperar')}>
                                <Text style={styles.buttonText}>¿Olvidaste tu contraseña?</Text></Pressable>
                            <Pressable style={styles.boton} onPress={loguear}>
                                <Text style={styles.iniciarSesionText}>INICIAR SESIÓN</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        )}
    </>
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
    boton1:{
        paddingVertical:15,
        paddingHorizontal:50,
        borderRadius:30,
        // width:50,
       
    },
    boton:{
        backgroundColor:'#80A0EB',
        borderRadius:10,
        marginTop:20,
        textAlign:'center',
        width:200,
        height:45,
        justifyContent:'center',
        alignItems:'center',
    },
    iniciarSesionText:{
        color:'#fff',
        fontSize:14,
        fontFamily:"Instrument Sans",
    },
    buttonText:{
        color:'#4f63bdff',
        fontSize:14,
        fontFamily:"Instrument Sans",
        width: '100%',
        alignItems:'flex-end',
    },
    cuadro:{
        backgroundColor:'#ffffffc7',
        padding:20,
        borderRadius:10,
        width:300,
        alignItems:'center',
    },
    titulo:{
        fontSize:24,
        color:'#222e6aff',
        marginBottom:20,
        fontFamily:'Josefin Sans',
    },
    input:{
        borderWidth:1,
        borderColor:'#9f9f9fff',
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
})