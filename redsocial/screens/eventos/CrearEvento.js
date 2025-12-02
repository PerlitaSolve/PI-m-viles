import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { EventoController } from '../../Controllers/eventoController'

export default function CrearEvento({navigation}) {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [ubicacion, setUbicacion] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [duracion, setDuracion] = useState("")
  const [imagen, setImagen] = useState("")

  const eventoController = new EventoController()


  async function handleCrearEvento() {
    try {
      await eventoController.crearEvento(nombre, descripcion, ubicacion, fecha, hora, duracion, imagen)
      Alert.alert("Evento creado exitosamente")

      navigation.navigate('MisEventos')
    } catch (error) {
      console.error(error)
      Alert.alert("No se pudo crear el evento")
    }
  }




  return (
    <ImageBackground 
    style={styles.fondo}
    source={require('../../assets/Fondo2.png')}>

      <View style={styles.separador}>
          <Image
          style={styles.logo}
          source={require('../../assets/LogoPI.png')}
          />
          <Ionicons name="person-circle-outline" size={60} color='#fff'/>
      </View>

      <View>
        <Text style={styles.texto}>AÑADE TU EVENTO AL FEED</Text>
        <Text style={styles.texto2}>LLena todos los campos para añadir tu evento</Text>
      </View>

      <View style={styles.cuadro}>
        <View>
            <Text style={styles.subtitulo}>Nombre del Evento</Text>
            <TextInput placeholder='Nombre del evento' style={styles.input} value={nombre} onChangeText={setNombre}></TextInput>
            
            <Text style={styles.subtitulo}>Descripcion</Text>
            <TextInput placeholder='Descripcion' style={styles.input} value={descripcion} onChangeText={setDescripcion}></TextInput>

            <View style={styles.hf}>
              <Text style={styles.subtitulo}>Fecha</Text>
              <TextInput placeholder='dd/mm/aaaa' style={styles.input2} value={fecha} onChangeText={setFecha}></TextInput>

              <Text style={styles.subtitulo}>Hora</Text>
              <TextInput placeholder='hh:mm' style={styles.input2} value={hora} onChangeText={setHora}></TextInput>
            </View>


            <Text style={styles.subtitulo}>Lugar del Evento</Text>
            <TextInput placeholder='Lugar del Eventos' style={styles.input} value={ubicacion} onChangeText={setUbicacion}></TextInput>

            <Text style={styles.subtitulo}>Duracion del evento</Text>
            <TextInput placeholder='Duracion' style={styles.input} value={duracion} onChangeText={setDuracion}></TextInput>

              <Pressable style={styles.boton} onPress={handleCrearEvento}>
                <Text style={styles.bText}>CREAR EVENTO</Text>
            </Pressable>

            <Pressable style={styles.boton2} onPress={()=> navigation.goBack()}>
                <Text style={styles.bText}>Cancelar</Text>
            </Pressable>

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
separador:{
  flexDirection:'row',
  gap:250,
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
  marginTop:20,
},
texto2:{
  fontSize:15,
  fontWeight:'550',
  color:'#8ab0e4ff',
  marginBottom:10,
  marginTop:3,
},
input:{
  borderWidth:1,
  borderColor:'#b4b4b4ff',
  backgroundColor:'#d4d4d4ff',
  borderRadius:10,
  paddingVertical:10,
  marginBottom:12,
  fontFamily:"Instrument Sans",
  paddingHorizontal:15,
  marginTop:10,
  width:300,
  fontSize: 14,
},
boton:{
  backgroundColor:'#8da5fcff',
  borderRadius:15,
  height:30,
  width:150,
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  alignSelf:'center',
},
boton2:{
  backgroundColor:'rgba(255, 255, 255, 0)',
  borderRadius:15,
  height:30,
  width:150,
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  alignSelf:'center',
},
bText:{
  color:'#fff',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  alignSelf:'center',
},
hf:{
  flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
},
cuadro:{
  backgroundColor: 'rgba(255, 255, 255, 0.53)',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
},
subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#282d50ff',
    marginBottom: 6,
    marginTop: 10,
  },
input2:{
  borderWidth:1,
  borderColor:'#b4b4b4ff',
  backgroundColor:'#d4d4d4ff',
  borderRadius:10,
  paddingVertical:12,
  marginBottom:12,
  fontFamily:"Instrument Sans",
  paddingHorizontal:13,
  marginTop:10,
  fontSize: 14,
},
})