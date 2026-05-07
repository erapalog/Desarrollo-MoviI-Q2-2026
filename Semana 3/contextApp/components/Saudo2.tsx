import { View, Text } from 'react-native'
import React from 'react'
import Saludo3 from './Saludo3'

export default function Saudo2(props: { nombre: string,apellido: string }) {
  return (
    <View>
      <Text>Bienvenido desde componente Saudo2 {props.nombre}</Text>
      <Saludo3 nombre={props.nombre} apellido={props.apellido} />
    </View>
  )
}