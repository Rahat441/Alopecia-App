
import react from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import { useState } from 'react';


// import ButtonLogin from "../components/buttons/buttonlogin";
// import ButtonSign from "../components/buttons/buttonsign";






export default function Homepage({ navigation }) {


/*Functions*/
const pressHandler = () => {
    navigation.navigate('SignUp')
}
const pressHandler2 = () => {
    navigation.navigate('LogIn')
}


/*Functions*/

const local = require("../assets/projectImages/login.png");
const logoHome = require('../assets/projectImages/logoHome.png');

  return (

  <ImageBackground source={local} style={styles.Img}>
    {/* <View style={styles.logo}>
      <Image style={styles.logoImage} source={logoHome} />
      <Text> TEXTTT HEREEEE</Text>
    </View> */}
    <View style={styles.login}> 
    
      <Button  title='Login' onPress={pressHandler2} color='#FFFFFF' /> 
      
    </View>

    <View style={styles.signIn}> 
    
      <Button  title='Sign Up' onPress={pressHandler} color='#FFFFFF' /> 
      
    </View>
      
  </ImageBackground>
    
    
  );
}







const styles = StyleSheet.create({
  
    Img: {
        flex:1,
        justifyContent: 'center'
    
      },
      login: {
        flexDirection:'row',
        position: 'absolute',
        height:40,
        width :130,
        top: 610,
        left:85,
        
        
      },
      signIn:{
        flexDirection:'row',
        position: 'absolute',
        height:40,
        width :130,
        top: 610,
        left:240,

      },
      logo:{

      }
});


