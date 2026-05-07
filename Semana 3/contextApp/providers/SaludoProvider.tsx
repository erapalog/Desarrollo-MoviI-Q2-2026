import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewProps } from '../modelos/View'
import { contextSaudo } from '../context/ContextSaludo'

//props ReactNode 
//debemos darle funcionalidad al contexto y exportarlo
//exportar el contexto


export default function SaludoProvider(props: ViewProps) {

  const [nombre, setNombre] = useState<string>('Juan')
  const [apellido, setApellido] = useState<string>('Perez')


  return (
    <View>

    <contextSaudo.Provider value={{ nombre, apellido }}>
        {props.children}
    </contextSaudo.Provider>
    
    </View>
  )
}

export const useContextSaudo = () => {
    return useContext(contextSaudo)
}