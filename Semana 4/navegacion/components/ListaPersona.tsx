import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Persona } from '../modelos/Persona'
import { useContextPersona } from '../providers/ProviderPersona'

export default function ListaPersona() {

  const {listaPersona} = useContextPersona();
  return (
    <FlatList 
    data={listaPersona} 
    renderItem={({item}) => <Text>{item.nombre} - {item.edad} - {item.email}</Text>} 
    keyExtractor={(item: Persona) => item.id.toString()}
    />
  )
}