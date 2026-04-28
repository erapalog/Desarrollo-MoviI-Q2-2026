import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './component/Saludo';
import Boton from './component/Boton';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera apliaacion  en react native!</Text>
      <StatusBar style="auto" />

      <Saludo nombre="Juan" apellido="Perez" email="juan@gmail.com" />

      <Boton nombre="Juan" apellido="Perez" email="juan@gmail.com" />
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
