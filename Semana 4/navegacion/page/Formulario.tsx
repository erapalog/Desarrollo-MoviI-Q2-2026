import { View, Text, Button, TextInput, FlatList } from 'react-native'
import React, { useState ,useEffect} from 'react'
import  { useContextPersona } from '../providers/ProviderPersona';
import { Persona } from '../modelos/Persona';
import ListaPersona from '../components/ListaPersona'

export default function Formulario() {


  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');

  const {agregarPersona, listaPersona} = useContextPersona();

  function agregar() {
    let persona:  Persona = {
      id: listaPersona.length + 1,
      nombre: nombre,
      edad: parseInt(edad),
      email: email
    }
    agregarPersona(persona);
    setNombre('');
    setEdad('');
    setEmail('');
    alert('Persona agregada correctamente');
  }
  
  useEffect(() => {
    console.log(listaPersona);
  }, [listaPersona]);

  return (
    <View>

        <Text>Formulario de Persona</Text>
          <TextInput placeholder='Nombre' value={nombre} onChangeText={setNombre} />
          <TextInput placeholder='Edad' value={edad} onChangeText={setEdad} />
          <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
          <Button title='Agregar Persona' onPress={() => agregar()} />

          <Text>Lista de Personas</Text>  

        <ListaPersona/>
          
    </View>

  )
}