
import React from 'react'
import { StyleSheet, View, TouchableOpacity,ImageBackground,Image,Text} from 'react-native';
import { Calendar,LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['es']={
  monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
  monthNamesShort:["en","feb","mar","abr","may","jun","jul","ag","sept","oct","nov","dic"],
  today:"hoy",
  dayNames:["lunes","martes","miercoles","jueves","viernes","sabado","domingo"],
  dayNamesShort:["lun","mar","mier","juev","vier","sab","dom"]
}
LocaleConfig.defaultLocale ='es'
const Prueba  = () => {
  return (
    <View>
      
    <ImageBackground source={require('../assets/fondo.jpg')} style={styles.fondo}>
    <Image source={require('../assets/icono.jpg')} style={styles.perfil}></Image>
    
    <Calendar firstDay={1}  markingType={'period'}
  markedDates={{
    '2024-09-22': {startingDay: true, color: 'lightblue'},
    '2024-09-23': {selected: true, color: 'lightblue',textColor:"black" },
    '2024-09-24': {slected: true, color: 'lightblue'},
    '2024-09-25': {selected: true,endingDay: true, color: 'lightblue',textColor: 'gray'},

  }}
    onDayPress={(day) =>{
      console.log('select day',day)
    }}
    hideExtraDays style={styles.calendario}
    />
    
    </ImageBackground>
    
    </View>
  )
}
const styles = StyleSheet.create({
  texto:{
    color:'black',
         fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  estrella:{
    height:130,
    width:130,
    
  },
  calendario:{
    width:360,
    
    

  },
fondo:{
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center",
  
  },
  perfil: {
    justifyContent:"flex-start",
    height:130,
    width:130,
    borderRadius: 400/ 2,
    borderColor:'black',
    borderWidth:5,
    position:"relative",
    alignContent:"flex-start"
   

  },
});
export default Prueba

