import { Text, StyleSheet, View,ScrollView,Pressable,ImageBackground,Image,TextInput } from 'react-native'
import React, { Component } from 'react'

export default function home() {

    return (
      <ImageBackground
        source={require('../../assets/Fondo1.png')}
        style={styles.fondo}      
      >
      <ScrollView>
        

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
})