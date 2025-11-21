import { Text, StyleSheet, View,ScrollView,Pressable,ImageBackground,Image} from 'react-native'
import React, { Component } from 'react'

export default function MisEventos(){

    return (
        <ImageBackground
        source={require('../assets/Fondo1.png')}
        style={styles.fondo}
        >
        <View style={styles.separador}>
            <Image
            style={styles.logo}
            source={require('../assets/profile.png')}
           
            />

             <Image
            style={styles.logo}
            source={require('../assets/LogoPI.png')}
            />       

        </View>
        <Text style={styles.textotitulo}>MIS EVENTOS</Text>
        <Text style={styles.texto}>Visualiza los eventos a los que te has unido</Text>
        <ScrollView>
        <View style={styles.Cuadroevento}>
         <View style={styles.Cuadrointerno}>

            <View style={styles.SupPart}>

                <Text> hola</Text>

            </View>
            <View style={styles.SupMed}>
                <View>
                <Text style={styles. textoInternotitulo}>Nombre del Evento</Text>
                <Text style={styles. textoInterno}>Descripcion de Evento</Text>
                </View>

                <View>
                    <Text>HOLAAA</Text>
                </View>
            </View>
            <View style={styles.separadorbotones}>
       
                <Pressable style={styles.botonVer}>
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

            </View>

        </View>
        <View style={styles.Cuadroevento}>
             <View style={styles.Cuadrointerno}>

         </View>

        </View>        


        </ScrollView>

        </ImageBackground>
    )
  
}

const styles = StyleSheet.create({
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
    },
    separador:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:350,
        marginTop:10,
    },
    textotitulo:{
        fontSize:22,
        color:'#fff',
        marginTop:30,
        letterSpacing:.5,
        fontWeight:'550',
    },
    texto:{
        fontSize:16,
        color:'#fff',
        margin:15,
        fontWeight:'400'
    },
    Cuadroevento:{
        width:400,
        height:600,
        backgroundColor:'#fff',
        alignItems:'center',
        alignContent:'center',
        margin:15,
        borderRadius:30,
        zIndex:10,
    },
    Cuadrointerno:{ //
        width:350,
        height:550,
        backgroundColor:'#dbdbdbff',
        alignItems:'center',
        marginTop:25,
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
    separadorbotones:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',  
        
        marginTop:10,
        gap:20,
    },
    botonVer:{
    backgroundColor:'#aeaeaeff',
    paddingVertical:12,
    width:150,
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
       // backgroundColor:'#dbdbdbff',
        backgroundColor:'#17c38fff',    
        borderRadius:20,
    },
    textoInternotitulo:{
        fontSize:17,
        color:'#fff',
        marginLeft:8,
        fontWeight:'550',
        marginTop:5,    
      //  justifyContent:'flex-start' ,
    },
     textoInterno:{
        fontSize:14,
        color:'#fff',
        marginLeft:8,
        fontWeight:'550',
        marginTop:5,     
       // justifyContent:'flex-end' ,
    },   

})