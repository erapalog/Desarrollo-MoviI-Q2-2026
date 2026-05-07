import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludos from './components/Saludos';
import Consumidor1 from './components/Consumidor1';
import SaludoProvider from './providers/SaludoProvider';
import Consumir2 from './components/Consumir2';
import AlumnoProvider from './providers/AlumnoProvider';
import FormularioAlumno from './components/Alumnos/FormularioAlumno';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <Saludos nombre="Juan" apellido="Perez" />

      <SaludoProvider>
        <Consumidor1 />
        <Consumir2 />
        
      </SaludoProvider>

      <AlumnoProvider>
             <FormularioAlumno />
      </AlumnoProvider>
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
