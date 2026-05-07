import { View, Text } from 'react-native'
import React from 'react'
import { useContextSaudo } from '../providers/SaludoProvider'

export default function Consumir2() {

    const { nombre } = useContextSaudo()
  return (
    <View>
      <Text>Consumir2</Text>
      <Text>{nombre}</Text>
    </View>
  )
}