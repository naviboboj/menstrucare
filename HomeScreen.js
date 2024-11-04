import React from 'react'
import { StyleSheet, View, TouchableOpacity,ImageBackground,Image} from 'react-native';
import { Text } from 'react-native-paper';
const HomeScreen = ({ navigation }) => {
  return (
    <View>
        
        <ImageBackground source={require('../assets/FondoHOME.jpg')} style={{alignItems:'center',width:'100%',height:'100%',justifyContent:'center'}}>
      <Image source={require('../assets/MARIPOSA.jpg')} style={styles.perfil}></Image>
      <Text style={styles.letra}>BIENVENIDA</Text>
      
          <TouchableOpacity style={styles.cajaboton} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.texto}>comenzar</Text>
              </TouchableOpacity>
            
           </ImageBackground>
           
      </View>
     
  )
}
const styles = StyleSheet.create({
    
    letra:{
         color:'black',
         fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center'
      
    },
    
    cajaboton:{
      backgroundColor:'#F4F6F7',
      borderRadius:30,
      paddingVertical:20,
      width:150,
      marginTop:20,
      borderColor:'black',
      borderWidth:3,
    },
    perfil: {
      
      height:200,
      width:200,
      borderRadius: 400/ 2,
      position:'relative',
      borderColor:'black',
        borderWidth:3,
    },
    texto :{
      color:'black',
      fontSize: 20, 
      textAlign: 'center',
     
    },
  });
export default HomeScreen
