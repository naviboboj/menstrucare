import React from 'react'
import { StyleSheet, View, TouchableOpacity,ImageBackground,Image} from 'react-native';
import { Text } from 'react-native-paper';
const HomeScreen = ({ navigation }) => {
  return (
    <View>
        
        <ImageBackground source={require('../assets/fondo.jpg')} style={{alignItems:'center',width:'100%',height:'100%',justifyContent:'center'}}>
      <Image source={require('../assets/fondo 2.jpg')} style={styles.perfil}></Image>
      
      
          
            
           </ImageBackground>
           
      </View>
     
  )
}
const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor:'#c3cb9c',
      borderColor:'FC4F00 ',
      borderWidth:2,
      borderRadius:10,
      marginLeft:20,
      marginRight:20,
      marginTop:20
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