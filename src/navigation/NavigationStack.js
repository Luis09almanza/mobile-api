import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Pokemons from '../Screens/Pokemon';
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
            <Stack.Screen name='Pokemon' component={Pokemons} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}
