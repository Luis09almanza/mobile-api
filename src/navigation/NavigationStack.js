import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Pokemons from '../Screens/Pokemons';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{headerShown:false}}
            />
            <Stack.Screen name='Pokemons' component={Pokemons}/>
        </Stack.Navigator>
    );
}
