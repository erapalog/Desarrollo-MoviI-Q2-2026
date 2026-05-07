import { View, Text } from 'react-native'
import React from 'react'
import Saudo2 from './Saudo2'

export default function Saludo3(props: { nombre: string ,apellido: string }) {
  return (
    <View>
      <Text>Saludo3 desde componente Saludo3 {props.nombre} {props.apellido}</Text>
    </View>
  )
}