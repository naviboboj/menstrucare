// Resultados.js
import React from 'react';
import { View, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import { addDays } from 'date-fns';
import { Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Resultados = ({ route }) => {
  const { nextMonthDate } = route.params; // Obtener la fecha del próximo mes
  const navigation = useNavigation();

  // Calcular la fecha aproximada de 5 días después
  const estimatedDate = addDays(new Date(nextMonthDate), 5);

  return (
    <View style={styles.container}>
        
        <ImageBackground source={require('../assets/planta.jpg')} style={styles.fondo}>
        <View style={styles.titular}>
          <Text style={styles.textoboton}>Resultados del próximo ciclo menstrual</Text>
        </View>
        
        <View style={styles.tarjeta}>
            <View style={styles.texto}>
            <View style={styles.texto}>
      <Text style={styles.texto}>Fecha del siguiente ciclo </Text>
      <View style={styles.fecha1}>
        <Text>{nextMonthDate.split('T')[0]}</Text>
      </View>
      <Text style={styles.textounico}>Aproximado de cuando puede acabar el ciclo</Text>
    </View>
    <View style={styles.fecha2}>
        <Text> {estimatedDate.toISOString().split('T')[0]}</Text>
      </View>
            </View>
            <View style={styles.boton}>
            <TouchableOpacity style={styles.cajaboton} onPress={()=> navigation.navigate('Recommendations')}>
                    <Text style={styles.textoboton}> Recomendaciones</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
        </ImageBackground>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  fecha1:{
    margin: 1,
    backgroundColor: '#F4F6F6',
    borderRadius: 20,
    width: '95%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems:'center',
    marginLeft:15,
    
  },
  textounico:{
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    marginTop:10
  },
  fecha2:{
    margin: 0,
    backgroundColor: '#F4F6F6',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft:100,
    marginTop:-30,
    
  },
  titular: {
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
    alignItems: 'center',
    
  },
  inf: {
    fontSize: 16,
    width: '100%',
    color:'gray',
  },
  tarjeta: {
    margin: 10,
    backgroundColor: '#D6DBDF',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems:'center',
    
  },
  cajaboton:{
    backgroundColor:'#BFC9CA',
    borderRadius:30,
    paddingVertical:20,
    width:200,
    marginTop:20,
    borderColor:'black',
    borderWidth:1,
    alignItems: 'center',
  },
  fondo: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  texto: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  boton:{
    alignItems:'center'
  },
  textoboton:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Resultados;
