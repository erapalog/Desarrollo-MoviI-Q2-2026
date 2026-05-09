import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../page/Home';
import Configuracion from '../page/Configuracion';
import Formulario from '../page/Formulario';
import ProviderPersona from '../providers/ProviderPersona';

export default function Navegacion() {

  const tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
        <tab.Navigator>

          <tab.Screen name="Configuracion" component={Configuracion} />
          <tab.Screen name="Home" component={Home} />
          <tab.Screen name="Formulario" component={Formulario} />
        </tab.Navigator>

      </NavigationContainer>

  )
}