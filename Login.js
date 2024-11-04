import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity,ImageBackground,Image,TextInput,Alert,SafeAreaView} from 'react-native';
import { Text } from 'react-native-paper';
import app from '../firebaseconfig';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';


const auth = getAuth(app);

const Login = ({ navigation }) => {
    const [value, setValue] = useState('Login');
    const [email,setEmail]=useState();
    const[password,setpassword]=useState();
    


    const logueo = async()=>{
        try{
            await signInWithEmailAndPassword(auth,email,password)
            Alert.alert('iniciando sesion','Accediendo....')
            navigation.navigate('Prueba')
        }catch (error){
            console.log(error);
            Alert.alert('error','usuario o contraseña son incorrectos')
        }
    }
    
  return (
    
    <View style={styles.padre}>
        
        <ImageBackground source={require('../assets/arboles.jpg')} style={styles.fondo}>
        <View>
            <Image source={require('../assets/iconlogin.jpg')} style={styles.perfil}/>
        </View>
        <View style={styles.tarjeta}>
            <View style={styles.texto}>
                <TextInput placeholder='gmail' style={{paddingHorizontal:15}}
                onChangeText={(text)=>setEmail(text)}/>
            </View>
            <View style={styles.texto}>
                <TextInput placeholder='contraseña' style={{paddingHorizontal:15}} secureTextEntry={true}
                onChangeText={(text)=>setpassword(text)}/>
            </View>
            <View style={styles.boton}>
                <TouchableOpacity style={styles.cajaboton} onPress={logueo}>
                    <Text style={styles.textoboton}> iniciar sesion</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.boton}>
                <TouchableOpacity style={styles.cajaboton} onPress={()=> navigation.navigate('Register')}>
                    <Text style={styles.textoboton}> registro</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    </View>
     
  )
}
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
        backgroundColor:'white'
    },
    fondo:{
        alignItems:'center',
        width:'100%',
        height:'100%',
        justifyContent:'center'
    },
    texto:{
        paddingVertical:20,
        backgroundColor:'#D5DBDB',
        borderRadius:30,
        marginVertical:10,
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
        backgroundColor:'white',
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
        marginTop:10,
        borderColor:'black',
        borderWidth:1,
      },
      textoboton:{
        textAlign:'center',
        color:'black',
      }
});
export default Login