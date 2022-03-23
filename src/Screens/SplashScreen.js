import React, { useEffect } from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

const image_url = "https://phonewallpaperhd.com/wp-content/uploads/2019/03/Pokemon-Cell-Phones-Wallpaper.jpg"

export default function SplashScreen({navigation}){

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Pokemon")
        },7000)
    });
    return(
        <SafeAreaView style = {styles.image_container}>
            <Image source={{uri:image_url}} style = {styles.image}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#e2e7da"
    },
    image:{
        width:'100%',
        height:'100%',
        alignSelf:'center'
    }
})