import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, TextInput, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import app from '../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Registro = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Registro exitoso", "El usuario se ha registrado exitosamente. Ahora puedes iniciar sesión.", [
        { text: "OK", onPress: () => { setEmail(""); setPassword(""); setConfirmPassword(""); } }
      ]);
    } catch (error) {
      Alert.alert("Error al registrar usuario", error.message);
      console.error("Error al registrar usuario:", error.message);
    }
  };

  return (
    <View style={styles.padre}>
      <ImageBackground source={require('../assets/arboles.jpg')} style={styles.fondo}>
        <View>
          <Image source={require('../assets/iconlogin.jpg')} style={styles.perfil} />
        </View>
        <View style={styles.tarjeta}>
          <View style={styles.texto}>
            <TextInput
              placeholder='gmail'
              style={{ paddingHorizontal: 15 }}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.texto}>
            <TextInput
              placeholder='contraseña'
              style={{ paddingHorizontal: 15 }}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.texto}>
            <TextInput
              placeholder='confirmar contraseña'
              style={{ paddingHorizontal: 15 }}
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <View style={styles.boton}>
            <TouchableOpacity style={styles.cajaboton} onPress={Registro}>
              <Text style={styles.textoboton}>Registrarse</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      buttonText: {
        marginTop:25,
        fontSize: 15,
        
        color: '#007BFF',
        textDecorationLine: 'underline', 
        lineHeight: 24, 
    
      },
    
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F7F9F9',
    },
    fondo:{
        alignItems:'center',
        width:'100%',
        height:'100%'
        ,justifyContent:'center'
    },
    texto:{
        paddingVertical:20,
        backgroundColor:'#D5DBDB',
        borderRadius:30,
        marginVertical:5,
        
    },
    perfil: {
      
        height:150,
        width:150,
        borderRadius: 400/ 2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:3,
      },
      tarjeta:{
        margin:20,
        backgroundColor:'#F7F9F9',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        borderColor:'black',
        borderWidth:2,
      },
      boton:{
        alignItems:'center'
      },
      cajaboton:{
        backgroundColor:'#BFC9CA',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20,
        borderColor:'black',
        borderWidth:1,
      },
      textoboton:{
        textAlign:'center',
        color:'black'
      }
});
export default Register