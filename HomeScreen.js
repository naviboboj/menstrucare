import React from 'react'
import { StyleSheet, View, TouchableOpacity,ImageBackground,Image} from 'react-native';
import { Text } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
        
        <ImageBackground source={require('../assets/fondo.jpg')} style={{alignItems:'center',width:'100%',height:'100%',justifyContent:'center'}}>
      <Image source={require('../assets/fondo 2.jpg')} style={styles.perfil}></Image>
      <Text style={styles.letra}>BIENVENIDO</Text>
      
          <TouchableOpacity onPress={() => navigation.navigate('Prueba')}>
                  <Text >comenzar</Text>
              </TouchableOpacity>
            
           </ImageBackground>
           
      </View>
     
  )
}
const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 20,
    },
    letra:{
         color:'black',
         fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center'
      
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    perfil: {
      
      height:200,
      width:200,
      borderRadius: 400/ 2,
      position:'relative',
    },
  });
export default HomeScreen
