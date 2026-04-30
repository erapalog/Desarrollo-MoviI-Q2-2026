import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Button, Alert} from 'react-native';
import AnimalComponent from './components/AnimalComponent';

export default function App() {


  const [count, setCount] = useState<number>(0);

  let contador = 0;

  function incrementarEstado(){
    setCount(count + 1);
    contador++;

    console.log("Valor del contador: " + contador);
  }

  function decrementarEstado(){
    setCount(count - 1);
    contador--;
    console.log("Valor del contador: " + contador);
  }

  useEffect(() => {
    Alert.alert("Pantalla Cargada ");
    alert("Pantalla cargada")
  }, []);

  


  return (
    <View style={styles.container}>
      <Text>Aplicacion de HOOKS </Text>

      <Text>Valor del estado: {count}</Text>
      <Text>Valor del contador: {contador}</Text>

    <Button title="Incrementar" onPress={incrementarEstado} />
    <Button title="Decrementar" onPress={decrementarEstado} />


    <AnimalComponent></AnimalComponent>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
