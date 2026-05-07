import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextAlumno } from '../../providers/AlumnoProvider'
import { Alumno } from '../../modelos/Alumno'
import ListaUsuario from './ListaUsuario'
import { useContextSaudo } from '../../providers/SaludoProvider'

export default function FormularioAlumno() {

  const {listaAlumnos, agregarAlumno} = useContextAlumno()
  
  const [nombre, setNombre] = useState<string>('')
  const [apellido, setApellido] = useState<string>('')
  const [edad, setEdad] = useState<string>('')   


  function agregar() {

    let alumno: Alumno = {
      id: listaAlumnos.length + 1,
      nombre,
      apellido,
      edad: parseInt(edad)
    }
    agregarAlumno(alumno)
    setNombre('')
    setApellido('')
    setEdad('')
    Alert.alert('Alumno agregado correctamente')
  }

  useEffect(() => {
    console.log(listaAlumnos)
  }, [listaAlumnos])

  return (
    <View>
      <Text>Formulario de alumnos</Text>
      <TextInput placeholder='Nombre' value={nombre} onChangeText={setNombre} />
      <TextInput placeholder='Apellido' value={apellido} onChangeText={setApellido} />
      <TextInput placeholder='Edad' value={edad} onChangeText={setEdad} />
      <Button title='Agregar alumno' onPress={agregar} />



      <ListaUsuario />
    </View>
  )
}