import { View, Text } from 'react-native'
import React from 'react'
import Boton from './Boton'
import { Estudiante } from '../modelos/Estudiante'

export default function Saludo(props: Estudiante) {
  return (
    <View>
      <Text>Bienvenido a la aplicacion movil con react native! {props.nombre} - {props.apellido} - {props.email} </Text>
    </View>
  )
}