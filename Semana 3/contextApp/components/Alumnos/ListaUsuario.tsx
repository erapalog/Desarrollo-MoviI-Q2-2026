import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useContextAlumno } from '../../providers/AlumnoProvider'
import { useContextSaudo } from '../../providers/SaludoProvider'

export default function ListaUsuario() {

  const {listaAlumnos} = useContextAlumno()
  const {nombre, apellido} = useContextSaudo()

  return (
    <View>
      <Text>ListaUsuario</Text>
      <FlatList 
      data={listaAlumnos} 
        renderItem={({item}) => 
         <Text>{item.nombre} {item.apellido} {item.edad}</Text>} 
        keyExtractor={item => item.id.toString()} />

        <Text>Nombre del profesor: {nombre} {apellido}</Text>
    </View>


  )
}