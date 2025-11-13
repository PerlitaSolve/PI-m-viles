import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React, {useState}from 'react'

export default function Login() {
  return (
    <ImageBackground
        source={require('../assets/Fondo1.png')}
        style={styles.fondo}
    >
        <View>
            {/* <Image source={require('../assets/LogoPI.png')}></Image> */}
            <
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
})