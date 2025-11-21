import { Text, StyleSheet, View, Button} from 'react-native';
import React, { useState } from 'react'
import Login from './Login';
import Sesion from './Sesion';

export default function Menu(){
    const [screen, setScreen]=useState('menu');

    switch(screen){
        case 'Login':
            return <Login/>;
        case 'Sesion':
            return <Sesion/>;
        case 'menu':
            default:

                return(
                    <View style={styles.container}>
                    <Text style={styles.texto}>Menu</Text>

                    <View style={styles.botones}>
                    <Button  color='#843110ff' onPress={()=>setScreen('Login')} title='Login'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Sesion')} title='Sesion'/>
                    {/* <Button color='#843110ff' onPress={()=>setScreen('Text Input')} title='Práctica: Text Input'/>
                    <Button color='#843110ff' onPress={()=>setScreen('ImageBackgroud')} title='Práctica: ImageBackgroud'/>
                    <Button color='#843110ff' onPress={()=>setScreen('ScrollView')} title='Práctica: ScrollView'/>
                    <Button color='#843110ff' onPress={()=>setScreen('ActivityIndicator')} title='Práctica: ActivityIndicator'/>
                    <Button color='#843110ff' onPress={()=>setScreen('FlatList')} title='Práctica: FlatList'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Modal')} title='Práctica: Modal'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Botton Sheet')} title='Práctica: Botton Sheet'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Repaso 1')} title='Práctica: Repaso 1'/> */}
                    </View>
                    </View>
                );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#cfcfcfff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontFamily: 'Times New Roman',
        fontSize:  20,
        color: '#000000ff',
        fontWeight: 'bold',
    },
    botones:{
        marginTop: 20,
        flexDirection: "column",
        gap: 10, 
    },
});