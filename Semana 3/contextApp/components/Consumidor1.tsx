import { View, Text } from 'react-native'
import React from 'react'
import { useContextSaudo } from '../providers/SaludoProvider'

export default function Consumidor1() {

  const { nombre, apellido } = useContextSaudo()
  return (
    <View>
        <Text>Consumidor1</Text>
      <Text>{nombre} {apellido}</Text>
    </View>
  )
}