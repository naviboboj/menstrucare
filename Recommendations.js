import React from 'react';
import { StyleSheet, View, ImageBackground, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

const Recommendations = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/FondoRecommendations.jpg')} style={styles.fondo}>
        <View style={styles.padre}>
          <View style={styles.titulo}>
            <Text style={styles.letra}>RECOMENDACIONES</Text>
          </View>
          <View style={styles.contenedorimagen}>
            <Image source={require('../assets/flor.jpg')} style={styles.imagenes} />
            <Image source={require('../assets/cara.jpg')} style={styles.imagenes1} />
          </View>
          <Image source={require('../assets/caraemo.jpg')} style={styles.imagenes2} />
          
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Dolor abdominal y cólico</Text>
            <Text style={styles.textos}>☆ Aplicar calor en el abdomen con una bolsa de agua caliente o una almohadilla térmica. ★ Realizar ejercicio físico suave, como yoga o caminar.</Text>
          </View>
          
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Sangrado abundante</Text>
            <Text style={styles.textos}>☆ Usar protectores diarios o compresas para controlar el flujo.</Text>
            <Text style={styles.textos}>★ Aplicar frío en el área para reducir la inflamación.</Text>
            <Text style={styles.textos}>☆Consultar con un médico si el sangrado es excesivo.</Text>
          </View>
          
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Cambios de humor y ansiedad</Text>
            <Text style={styles.textos}>☆ Practicar técnicas de relajación como la meditación o el yoga.</Text>
            <Text style={styles.textos}>★ Realizar actividades que te gusten y te relajen.</Text>
            <Text style={styles.textos}>☆Hablar con un amigo o familiar de confianza.</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Dolor de cabeza y migraña</Text>
            <Text style={styles.textos}>☆Descansar en un lugar tranquilo y oscuro.</Text>
            <Text style={styles.textos}>★Aplicar frío en la frente o nuca. </Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Fatiga y cansancio</Text>
            <Text style={styles.textos}>☆Descansar lo suficiente y dormir bien.</Text>
            <Text style={styles.textos}>★Realizar ejercicio físico suave para mejorar la circulación.</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Bloating y retención de líquidos</Text>
            <Text style={styles.textos}>☆Beber suficiente agua para eliminar toxinas.</Text>
            <Text style={styles.textos}>★Evitar alimentos procesados y ricos en sal.</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.subtitulos}>Recuerda que es importante consultar con un médico si los síntomas son graves o persistentes.</Text>
          </View>
          
          
          
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
  },
  padre: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  contenedorimagen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  titulo: {
    marginVertical: 10,
    backgroundColor: '#ddb7c4',
    borderRadius: 20,
    width: 240,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop:50,
  },
  letra: {
    fontSize: 21,
    textAlign: 'center',
  },
  imagenes: {
    width: 125,
    height: 125,
    borderRadius: 20,
  },
  imagenes1: {
    width: 125,
    height: 125,
    borderRadius: 20,
    marginLeft:165,
  },
  imagenes2: {
    width: 125,
    height: 125,
    borderRadius: 20,
    marginVertical: 20,
    marginLeft:0,
    marginTop:-145,
  },
  seccion: {
    margin: 7,
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    padding: 20,
    elevation: 5,
  },
  subtitulos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop:-15,
  },
  textos: {
    fontSize: 16,
    textAlign: 'justify',
    marginLeft:-15,
  },
});

export default Recommendations;
