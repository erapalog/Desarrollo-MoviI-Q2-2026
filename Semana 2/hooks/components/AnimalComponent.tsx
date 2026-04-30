import { View, Text, TextInput, Button } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Animales } from '../models/Animales';
import ListaAnimales from './ListaAnimalesComponent';

export default function AnimalComponent() {

    const [listaAnimales, setListaAnimales] = useState<Animales[]>([]);

    const [nombre, setNombre] = useState<string>("");
    const [edad, setEdad] = useState<string>("");
    const [raza, setRaza] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>(0);
    const [tipo, setTipo] = useState<string>("");


    useEffect(() => {
        setListaAnimales([
            { nombre: "Perro", edad: 5, raza: "Labrador", color: "Negro", peso: 30, altura: 50, tipo: "Mamifero" },
            { nombre: "Gato", edad: 3, raza: "Siames", color: "Blanco", peso: 5, altura: 30, tipo: "Mamifero" },
            { nombre: "Pajaro", edad: 2, raza: "Canario", color: "Verde", peso: 1, altura: 10, tipo: "Ave" },
        ]);
    }, []);


    function agregarAnimal(){
        let animal: Animales = { nombre: nombre, edad: parseInt(edad), raza: raza, color: color, peso: parseInt(peso), altura: parseInt(altura), tipo: tipo };
        setListaAnimales([...listaAnimales, animal]);

        setNombre("");
        setEdad('');
        setRaza("");
        setColor("");
        setPeso('');
        setAltura('');
        setTipo("");
    }
  
  return (
    <View>


        <TextInput
            placeholder="Nombre animal"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
        />
        <TextInput
            placeholder="Edad"
            value={edad.toString()}
            onChangeText={(text) => setEdad(text)}
        />
        <TextInput
            placeholder="Raza"
            value={raza}
            onChangeText={(text) => setRaza(text)}
        />
        <TextInput
            placeholder="Color"
            value={color}
            onChangeText={(text) => setColor(text)}
        />
        <TextInput
            placeholder="Peso"
            value={peso.toString()}
            onChangeText={(text) => setPeso(text)}
        />
        <TextInput
            placeholder="Altura"
            value={altura.toString()}
            onChangeText={(text) => setAltura(text)}
        />
        <TextInput
            placeholder="Tipo"
            value={tipo}
            onChangeText={(text) => setTipo(text)}
            />
        <Button
            title="Agregar Animal"
            onPress={agregarAnimal}
        />


        {
            /*listaAnimales.map((animal) => (
                <View key={animal.nombre}>
                    <Text>{animal.nombre}</Text>
                    <Text>{animal.edad}</Text>
                    <Text>{animal.raza}</Text>
                    <Text>{animal.color}</Text>
                    <Text>{animal.peso}</Text>
                    <Text>{animal.altura}</Text>
                    <Text>{animal.tipo}</Text>
                </View>
            )) */
        }
        


      <ListaAnimales listado={listaAnimales}></ListaAnimales>
    </View>
  )
}