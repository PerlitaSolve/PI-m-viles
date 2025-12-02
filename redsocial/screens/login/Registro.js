import { Text, StyleSheet, View,Image,ImageBackground,TextInput,Pressable, Alert} from 'react-native'
import React, { Component } from 'react';
import { useState, useEffect} from 'react';
// import { LoginController } from '../../Controllers/loginCotroller';
// const controller = new LoginController();
import { controller } from '../../Controllers';
export default function Registro({navigation}) {
    const [nombre, setNombre]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [telefono, setTelefono]= useState('');
    const [grupo, setGrupo]= useState('');
    // useEffect(()=>{
    //     (async()=>{
    //         await controller.initialize();
    //     })();
    // }, []);
    const registrandoUsuario= async()=>{
        try{
            const usuarioCreado= await controller.registrarUsuario(email,password,nombre,telefono,grupo);
            Alert.alert(`Registro compleatado, ${usuarioCreado.nombre_usuario}. Puedes Iniciar Sesión`);
            setNombre(''); setEmail(''); setPassword(''); setTelefono(''); setGrupo('');
            navigation.navigate('Sesion');
        }catch(error){
            // Alert.alert(error.message);
            Alert.alert('Este usuario ya está registrado.');
        }
    }
    return (
        <ImageBackground
        source={require('../../assets/Fondo1.png')}
        style={styles.fondo}
        >
        <View style={styles.logo}>
            <Image source={require('../../assets/LogoPI.png')}
             style={styles.logoima}/> 
             <Text style={styles.texto}>Nombreeee</Text>
           
        </View>
        <View style={styles.container}>
            <View style={styles.interiorCont}>
                <Text style={styles.titulotext}>REGISTRARSE</Text>
            </View>
            <View style={styles.cajaPrincipal}>
                <Text style={styles.textoContainer}>Correo Electronico</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.textInput}
                    placeholder='correo' //email, password, nombre_usuario, telefono, grupo
                />
                <Text style={styles.textoContainer}>Contraseña</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.textInput}
                    placeholder='contrasena'
                />  
                <Text style={styles.textoContainer}>Nombre de Usuario</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Nombre'
                    value={nombre}
                    onChangeText={setNombre}
                />
                <Text style={styles.textoContainer}>Telefono</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='telefono'
                    value={telefono}
                    onChangeText={setTelefono}
                />   
                <Text style={styles.textoContainer}>Grupo</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Grupo'
                    value={grupo}
                    onChangeText={setGrupo}
                /> 
                <View>
                    <Pressable style={styles.boton} onPress={registrandoUsuario}>
                        <Text style={styles.textoBoton}>REGISTRAR</Text>
                    </Pressable>
                    <Pressable style={styles.Cancelar} onPress={() => navigation.goBack()}>
                        <Text style={styles.textoCancelar}>CANCELAR</Text>
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
    backgroundColor:'#ffffffff',
    width:'85%',
    height:'75%',
    borderRadius:25,
    alignContent:'center',
    marginBottom:'35%',
    elevation:12,
},
logo:{
    marginBottom:20,
    marginTop: '30%',
    justifyContent:'center',
    alignItems:'center',
},
logoima:{
    width:120,
    height:120,
    resizeMode:'contain',
},
texto:{
    color:'white',
    fontSize:30,
},
interiorCont:{
    alignItems:'center',

},
titulotext:{
    fontSize:20,
    color:'#3c26b8ff',
    //fontFamily:'Instrument Sans',
    margin:10,
    letterSpacing:0.5,
},
textoContainer:{
    fontSize:15,
   // fontFamily:'Instrument Sans',
    color:'#3c26b8ff',
    fontWeight:'600',
    marginLeft:20,
    marginTop:8,
    marginBottom:8,
},
cajaPrincipal:{
    textAlign:'left',
},
textInput:{
    width:'90%',
    height:45,
    backgroundColor:'#ebebebf2',
    borderRadius:15,
    paddingHorizontal:15,
    fontSize:15,
    marginLeft:15,
    borderWidth:2,
    borderColor:'#cdcdcdff'
},
boton:{
    backgroundColor:'#abb6ffff',
    marginLeft:'30%',
    paddingVertical:12,
    marginBottom:15,
    width:150,
    borderRadius:15,
    elevation:12,
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
    fontWeight:'bold',
},
Cancelar:{
    backgroundColor:'#ffffffff',
    marginLeft:'30%',
    paddingVertical:12,
    width:150,
    borderRadius:15,
    elevation:5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
},
textoCancelar:{
    color:'#6774cbff',
    fontSize:16,
    fontWeight:'bold',
},
})