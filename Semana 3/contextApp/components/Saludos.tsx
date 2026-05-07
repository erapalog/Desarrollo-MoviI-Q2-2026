import { View, Text } from 'react-native'
import React from 'react'
import Saudo2 from './Saudo2'

export default function Saludos(props: { nombre: string,apellido: string }) {
  return (
    <View>
      <Text>Bienvenido desde componente Saludos {props.nombre} {props.apellido}</Text>
      <Saudo2 nombre={props.nombre} apellido={props.apellido} />
    </View>
  )
}