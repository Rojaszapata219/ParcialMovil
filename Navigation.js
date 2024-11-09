import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"

//Screens
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

const TabNav = createBottomTabNavigator();

function RoutingTabs(){
    return(
        <TabNav.Navigator initialRouteName="home" 
        
        >
            <TabNav.Screen name="Inicio" component={Home} />
            <TabNav.Screen name="Personaje" component={Profile}/>
        </TabNav.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <RoutingTabs />
        </NavigationContainer>
    )
}