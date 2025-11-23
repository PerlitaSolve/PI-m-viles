import { Text, StyleSheet, View,ScrollView,Pressable,ImageBackground,Image} from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function MisEventos(){

    return (
        <ImageBackground
        source={require('../assets/Fondo1.png')}
        style={styles.fondo}
        >
        <View style={styles.separador}>
         
            <Ionicons name="person-circle-outline" size ={60} color='white'/>  
    
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

                <Image
                
                style={styles.imageneventos}
                source={require('../assets/imagenEventos1.webp')}
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
                source={require('../assets/imagenEventos1.webp')}
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
                source={require('../assets/imagenEventos1.webp')}
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
        marginTop:0,
        gap:20,
    },
    botonVer:{
    flexDirection:'row',
    gap:5,
    backgroundColor:'#aeaeaeff',
    paddingVertical:12,
    width:130,
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
}

})