import { View, Text, FlatList, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import { ListaAnimales } from '../models/ListaAnimales';

export default function ListaAnimalesComponent(lista: ListaAnimales) {
  return (
    <ScrollView>

      <FlatList

        data={lista.listado}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) =>
          <ScrollView style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nombre}</Text>
            <Text style={styles.itemText}>{item.edad}</Text>
            <Text style={styles.itemText}>{item.raza}</Text>
            <Text style={styles.itemText}>{item.color}</Text>
            <Text style={styles.itemText}>{item.peso}</Text>
            <Text style={styles.itemText}>{item.altura}</Text>
            <Text>{item.tipo}</Text>
          </ScrollView>
        }

      >

      </FlatList>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText:{
    fontSize: 16,
    fontWeight: 'bold',
  },
});