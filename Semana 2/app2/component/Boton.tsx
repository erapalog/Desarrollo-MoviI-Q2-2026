import { View, Text, Button } from 'react-native'
import React from 'react'
import { Estudiante } from '../modelos/Estudiante'

export default function Boton({nombre,apellido,email}: Estudiante) {
  return (
        <View>
        <Button title="Click me" onPress={() => alert(`Hola ${nombre} ${apellido} ${email}`)} />

    </View>
  )
}