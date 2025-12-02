import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';




export default function Perfil({navigation}) {
  return (
    <ScrollView>
    <ImageBackground
      source={require('../../assets/Fondo4.png')}
      style={styles.fondo}
    >
        <View style={{position:'absolute', top:40, left:20}}>
          <Image source={require('../../assets/LogoPI.png')} 
          style={styles.logo}              
          />
        </View>
          <Text style={styles.titulo}>MI PERFIL</Text>
        

      <View style={styles.container}>
        <View>
          <Text style={styles.text2}>---------------------------------------------------</Text>

          <View style={{alignItems:'center', justifyContent:'center', marginBottom:20, marginTop:20}}>
            <Image source={require('../../assets/Lperfil.png')}
            style={styles.foto}/>

            <Pressable style={styles.iconCamara}>
                <Ionicons name="camera" size={28} color="#fff" />
            </Pressable>
          </View>

          <Text style={styles.text2}>Nombre de Usuario</Text>
          <Text style={styles.text2}>---------------------------------------------------</Text>
        </View>


        <View style={styles.cuadro}>
          <View>
                <View>
                <Text style={styles.text}>Nombre</Text>
                <TextInput placeholder='Nombre Completo' style={styles.input}></TextInput>
                <Ionicons name="pencil" size={20} color="#555" style={styles.pencil}/>
                </View>

                <View>
                <Text style={styles.text}>Grupo</Text>
                <TextInput placeholder='Grupo' style={styles.input}></TextInput>
                <Ionicons name="pencil" size={20} color="#555" style={styles.pencil}/>
                </View>

                <View>
                <Text style={styles.text}>Telefono</Text>
                <TextInput placeholder='Telefono' style={styles.input} keyboardType='numeric'></TextInput>
                <Ionicons name="pencil" size={20} color="#555" style={styles.pencil}/>
                </View>

                <View>
                <Text style={styles.text}>Correo Electrónico</Text>
                <TextInput placeholder='@correo' style={styles.input} ></TextInput>
                <Ionicons name="pencil" size={20} color="#555" style={styles.pencil}/>
                </View>
                
              <Pressable style={styles.boton}>
                  <Text style={styles.bText}>GUARDAR CAMBIOS</Text>
              </Pressable>

          </View>
        </View>


      </View>
    </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    logo:{
        height:60,
        width:90,
        zIndex:1,
        marginTop:0,
        marginBottom:20,
        flexDirection:'flex-start',
    },
    titulo:{
      fontSize:20,
      color:'#ffffffff',
      alignItems:'center',
      marginBottom: 5,
      fontFamily:'Josefin Sans',
      justifyContent:'center',
      textAlign:'center',
      padding: 30,
      marginTop:30,
    },
     fondo:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    foto:{
      height: 120,
      width:120,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:20,
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
        marginBottom:10,
        fontFamily:"Instrument Sans",
        paddingVertical:8,
        paddingHorizontal:40,
        marginTop:10,
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
    bText:{
        color:'#fff',
        fontSize:14,
        fontFamily:"Instrument Sans",
        justifyContent:'center',
        alignItems:'center',
    },
    text2:{
      fontSize:16,
      color:'#ffffffff',
      alignItems:'center',
      marginBottom:5,
      fontFamily:'Josefin Sans',
      justifyContent:'center',
      textAlign:'center',
  },
  iconCamara:{
  position:'absolute',
  bottom:0,
  right:0,
  backgroundColor:'#80A0EB',
  padding:8,
  borderRadius:50,
},
pencil:{
  position:'absolute',
  right:15,
  top:12,
},
});