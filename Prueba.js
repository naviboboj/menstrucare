import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, TextInput, Alert, Text} from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { addMonths } from 'date-fns';
import app from '../firebaseconfig';
import { useNavigation } from '@react-navigation/native'; // Importar para navegación

const Prueba = () => {
  const [inputDate, setInputDate] = useState('');
  const [nextMonthDate, setNextMonthDate] = useState(null);
  const navigation = useNavigation(); // Inicializar la navegación

  const db = getFirestore(app);

  const handleSaveDate = async () => {
    try {
      if (!inputDate) {
        Alert.alert('Fecha vacía', 'Por favor ingresa una fecha en formato YYYY-MM-DD');
        return;
      }

      const dateParts = inputDate.split('-');
      if (dateParts.length !== 3) {
        Alert.alert('Formato incorrecto', 'Por favor ingresa la fecha en formato YYYY-MM-DD');
        return;
      }

      const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      if (isNaN(date.getTime())) {
        Alert.alert('Fecha inválida', 'Por favor ingresa una fecha válida en formato YYYY-MM-DD');
        return;
      }

      const calculatedNextMonthDate = addMonths(date, 1);

      await addDoc(collection(db, 'dates'), {
        originalDate: date.toISOString(),
        nextMonthDate: calculatedNextMonthDate.toISOString()
      });

      setNextMonthDate(calculatedNextMonthDate.toISOString());

      Alert.alert('Fecha guardada', `La fecha ingresada fue guardada con éxito.`);
      setInputDate('');
    } catch (error) {
      console.error("Error al guardar las fechas: ", error);
      Alert.alert('Error', 'Hubo un problema al guardar la fecha. Intenta de nuevo.');
    }
  };

  const handleShowResults = () => {
    if (nextMonthDate) {
      navigation.navigate('Resultados', { nextMonthDate }); // Navegar a Resultados con la fecha
    } else {
      Alert.alert('Error', 'Por favor guarda primero la fecha.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/exotico.jpg')} style={styles.fondo}>
        <View style={styles.tarjeta}>
          <Text style={styles.texto}>Digite la fecha del inicio de su ciclo</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Fecha (YYYY-MM-DD)'
              style={styles.input}
              value={inputDate}
              onChangeText={setInputDate}
              keyboardType="numeric"
            />
            <Text style={styles.input}>Ejemplo: 2024-10-06</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSaveDate}>
            <Text style={styles.buttonText}>Guardar Fecha</Text>
          </TouchableOpacity>
          
          
        </View>
        <View style={styles.bordeboton}>
          {/* Botón para mostrar resultados */}
          <TouchableOpacity style={styles.button} onPress={handleShowResults}>
            <Text style={styles.buttonText}>Mostrar Resultados</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  fondo: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  tarjeta: {
    margin: 20,
    backgroundColor: '#D6DBDF',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop:-105,
  },
  bordeboton: {
    margin: 20,
    backgroundColor: '#D6DBDF',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop:50,
  },
  texto: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    backgroundColor: '#e8e8e8',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    width: '100%',
    color:'gray',
  },
  button: {
    backgroundColor: '#F4F6F6',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  exampleText: {
    color: 'gray',
    marginTop: 5
  },
});

export default Prueba;
