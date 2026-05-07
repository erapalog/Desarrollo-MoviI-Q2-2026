import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewProps } from '../modelos/View'
import { Alumno } from '../modelos/Alumno'
import { contextAlumno } from '../context/ContextAlumno'

//props ReactNode 
//debemos darle funcionalidad al contexto y exportarlo
//exportar el contexto

export default function AlumnoProvider(props: ViewProps) {

    const [listaAlumnos, setListaAlumnos] = useState<Alumno[]>([])
    
    function agregarAlumno(alumno: Alumno) {
        setListaAlumnos([...listaAlumnos, alumno])
    }


  return (
    <View>
      
      <contextAlumno.Provider value={{ listaAlumnos, agregarAlumno }}>
        {props.children}
      </contextAlumno.Provider>
    </View>
  )
}

export const useContextAlumno = () => {
    return useContext(contextAlumno)
}