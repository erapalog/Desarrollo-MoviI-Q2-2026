import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Vista } from '../modelos/Vista';
import { Persona } from '../modelos/Persona';
import { contextPersona } from '../context/ContexPersona';



export default function ProviderPersona(props: Vista) {

  const [listaPersona, setListaPersona] = useState<Persona[]>([]);

  function agregarPersona(persona: Persona) {
    setListaPersona([...listaPersona, persona]);
    console.log(persona);
  } 

  return (
        <contextPersona.Provider value={{listaPersona, agregarPersona}}>
            {props.children}
        </contextPersona.Provider>
    
  )
}

export function useContextPersona() {
    return useContext(contextPersona);
}