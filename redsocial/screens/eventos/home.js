import { Text, StyleSheet, View, ScrollView, Pressable, ImageBackground, Image, TextInput, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {EventoController} from '../../Controllers/eventoController';
import { participanteController } from '../../Controllers/participanteController'
import { controller } from "../../Controllers";

const controllerE= new EventoController();
const controllerP = new participanteController()

export default function Home({ navigation }) {
  const [carganding, setCarganding]= useState(true);
  const [eventos, setEventos]= useState([]);
  const [asistentesPorEvento, setAsistentesPorEvento] = useState({});
  const [misParticipaciones, setMisParticipaciones] = useState([]);
  const [searchText, setSearchText] = useState('')


  const cargarEventos= useCallback(async()=>{
      try{
          setCarganding(true);
          const eventosData= await controllerE.obtenerEventos();
          const userId = await controller.getCurrentUserId()

          const filtrados = eventosData.filter(ev => Number(ev.id_usuario) !== Number(userId))
          setEventos(filtrados);
          console.log(`${eventosData.length} eventos recuperados.`);
      }catch(error){
          Alert.alert('Error: ', error.message);
      }finally{
          setCarganding(false);
      }
  },[controllerE]);

  useEffect(() => {
      const cargarAsistentes = async () => {
          const cantidades = {};
          for (const ev of eventos) {
          const total = await controllerE.getCantidadParticipantes(ev.id_evento);
          cantidades[ev.id_evento] = total;
          }
          setAsistentesPorEvento(cantidades);
      };

      if (eventos.length > 0) {
          cargarAsistentes();
      }
  }, [eventos]);
  
  const cargarMisParticipaciones = async () => {
      const joined = await controllerP.getParticipacionesUsuario();
      setMisParticipaciones(joined.map(j => j.id_evento));
  }

  const handleJoin = async (id_evento) => {
    try {
      if (misParticipaciones.includes(id_evento)) {
        await controllerP.deleteParticipante(id_evento);
      } else {
        await controllerP.addParticipante(id_evento);
      }

      await cargarEventos();
      await cargarMisParticipaciones();

    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  useEffect(() => {
      cargarEventos();
      cargarMisParticipaciones();
  }, [])



  const renderEvento = ({ item: ev }) => {
    return (
      <View style={styles.eventCard}>
        
        <Image
          style={styles.eventImage}
          source={{ uri: ev.imagen }}
        />

        <Text style={styles.eventTitle}>{ev.nombre}</Text>
        <Text style={styles.eventDesc}>{ev.descripcion}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={22} color="#333" />
          <Text style={styles.infoText}>{ev.fecha} - {ev.hora}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={22} color="#333" />
          <Text style={styles.infoText}>{ev.ubicacion}</Text>
        </View>

        <View style={styles.separadoricons}>
          <Ionicons name="people-outline" size={25} color="#3d3d3dff" />
          <Text style={styles.textoicons}>
            {asistentesPorEvento[ev.id_evento] ?? 0} asistentes
          </Text>
        </View>

        <Pressable
          style={styles.botonUnirse}
          onPress={() => handleJoin(ev.id_evento)}
        >
          <Text style={styles.textBoton}>
            {misParticipaciones.includes(ev.id_evento) ? "SALIR" : "UNIRME"}
          </Text>
        </Pressable>

      </View>
    )
  }








  return (
    <ImageBackground
      source={require('../../assets/Fondo1.png')}
      style={styles.fondo}
    >

      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Notificaciones')} >
          <Ionicons name="notifications-outline" size={60} color="#fff" />
        </Pressable>
        
        <Text style={styles.tituloHome}>HOME</Text>

        <Pressable onPress={() => navigation.navigate('PerfilStack', { screen: 'Perfil' })} >
          <Ionicons name="person-circle-outline" size={60} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.separarTexto}>
          <Text style={styles.texto}>Visualiza los eventos a los que te has unido</Text>
      </View>      

     
      <View style={styles.buscadorContainer}>
        <Ionicons name="search-outline" size={22} color="#000" />
        <TextInput
          style={styles.buscadorInput}
          placeholder="Buscar evento"
          placeholderTextColor="#777"
          value={searchText}
          onChangeText={setSearchText} 
        />
      </View>

      {/* <ScrollView contentContainerStyle={{ paddingBottom: 80 }} nestedScrollEnabled={true}> */}

    
        {/* <Text style={styles.subtitulo}>Categorías populares</Text>

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
          <View style={styles.categoria}>
            <Ionicons name="musical-notes-outline" size={30} color="#fff" />
            <Text style={styles.textCategoria}>Música</Text>
          </View>

          <View style={styles.categoria}>
            <Ionicons name="football-outline" size={30} color="#fff" />
            <Text style={styles.textCategoria}>Deporte</Text>
          </View>

          <View style={styles.categoria}>
            <Ionicons name="color-palette-outline" size={30} color="#fff" />
            <Text style={styles.textCategoria}>Arte</Text>
          </View>

          <View style={styles.categoria}>
            <Ionicons name="restaurant-outline" size={30} color="#fff" />
            <Text style={styles.textCategoria}>Gastronomía</Text>
          </View>
        </ScrollView> */}

   
        <Text style={styles.subtitulo}>Eventos recomendados</Text>


        <FlatList
          data={eventos.filter(ev => 
            ev.nombre.toLowerCase().includes(searchText.toLowerCase())
          )} /* eventos */ /* eventos.filter(ev => !misParticipaciones.includes(ev.id_evento)) */
          keyExtractor={ev => ev.id_evento.toString()}
          renderItem={renderEvento}
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
          ListEmptyComponent={
            <Text style={[styles.textCategoria, {textAlign: 'center', marginTop: 80}]}>
              No hay eventos disponibles
            </Text>
          }
        />


        {/* <View style={styles.eventCard}>
          <Image
            style={styles.eventImage}
            source={require('../../assets/imagenEventos1.webp')}
          />
          <Text style={styles.eventTitle}>Festival de Música</Text>
          <Text style={styles.eventDesc}>Un evento lleno de energía y artistas.</Text>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={22} color="#333" />
            <Text style={styles.infoText}>25 Nov 2026 - 8:00 AM</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={22} color="#333" />
            <Text style={styles.infoText}>Colonia Centro</Text>
          </View>

          <View style={styles.separadoricons}> 
              <Ionicons name="people-outline" size={25} color='#3d3d3dff'/>
              <Text style={styles.textoicons}>14 asistentes</Text>
          </View >  

          <Pressable style={styles.botonUnirse}>
            <Text style={styles.textBoton}>UNIRME</Text>
          </Pressable>
        </View>

       
        <View style={styles.eventCard}>
          <Image
            style={styles.eventImage}
            source={require('../../assets/imagenEventos1.webp')}
          />
          <Text style={styles.eventTitle}>Exposición de Arte</Text>
          <Text style={styles.eventDesc}>Artistas locales mostrando su talento.</Text>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={22} color="#333" />
            <Text style={styles.infoText}>10 Dic 2026 - 10:00 AM</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={22} color="#333" />
            <Text style={styles.infoText}>Galería del Sol</Text>
          </View>

          <Pressable style={styles.botonUnirse}>
            <Text style={styles.textBoton}>UNIRME</Text>
          </Pressable>
        </View>
 */}
      {/* </ScrollView> */}
      {/* </ScrollView> */}

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  tituloHome: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
  },

  buscadorContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "75%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0099b0ff",
    marginTop: 20,
    paddingHorizontal: 10,
    gap: 5,
  },

  buscadorInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },

  subtitulo: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginTop: 30,
    marginLeft: 20,
  },

  categoria: {
    backgroundColor: "#0099b0ff",
    padding: 15,
    borderRadius: 20,
    width: 120,
    alignItems: "center",
    marginRight: 15,
  },

  textCategoria: {
    marginTop: 5,
    color: "#fff",
    fontWeight: "600",
  },

  eventCard: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
  },

  eventImage: {
    width: "100%",
    height: 200,
  },

  eventTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 10,
    color: "#333",
  },

  eventDesc: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
    color: "#555",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: 10,
    marginTop: 5,
  },

  infoText: {
    fontSize: 15,
    color: "#333",
  },

  botonUnirse: {
    backgroundColor: "#0099b0ff",
    marginTop: 15,
    width: 120,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "center",
  },

  textBoton: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
  },
  separadoricons:{
      flexDirection:'row',
      justifyContent:'start',
      alignItems:'center',
      gap:5,
      marginTop:10, 
      marginLeft:15,      
  },
  textoicons:{
      fontSize:15,
      color:'#3a3a3aff',
  },
  logo:{
  height:70,
  width:70,
  zIndex:2,
  marginTop:0,
},
separarTexto:{
    marginBottom:20,
},
    texto:{
        fontSize:16,
        color:'#fff',
        margin:15,
        fontWeight:'400',
    },
})
