import { Text, StyleSheet, View, ScrollView, Pressable, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Home({ navigation }) {

  return (
    <ImageBackground
      source={require('../../assets/Fondo1.png')}
      style={styles.fondo}
    >

      <View style={styles.header}>
        <Ionicons name="menu-outline" size={45} color="white" />
        
        <Text style={styles.tituloHome}>HOME</Text>

        <Ionicons name="notifications-outline" size={45} color="white" />
      </View>

     
      <View style={styles.buscadorContainer}>
        <Ionicons name="search-outline" size={22} color="#000" />
        <TextInput
          style={styles.buscadorInput}
          placeholder="Buscar evento o categoría"
          placeholderTextColor="#777"
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>

    
        <Text style={styles.subtitulo}>Categorías populares</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
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
        </ScrollView>

   
        <Text style={styles.subtitulo}>Eventos recomendados</Text>

        <View style={styles.eventCard}>
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

      </ScrollView>

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
})
