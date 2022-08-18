import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Image} from 'react-native';
import { useState } from 'react';
import { Input } from 'react-native'

export default function Log({navigation} ) {
  /** BG IMAGES USED */
  const bgImg = require('../assets/projectImages/logInPage.png');
  const emailInput = require("../assets/projectImages/loginPEmail.png");
  const passInput = require("../assets/projectImages/loginPpass.png");
  const crownLogo = require("../assets/projectImages/crownLogo.png");
  /** IMAGES USED */

 /** FUNCTIONS */
  const pressHandler = () => {
  navigation.navigate('')
}


/** FUNCTIONS */



  return (
    <ImageBackground source={bgImg} style={styles.backImage}>
      <Image source={crownLogo}
      style={styles.crownlogo}
      />
        
        <Button style={styles.forgotpass} title='Forgot Password' onPress={pressHandler}/>

        <View style ={styles.emailInputView}>
          <Image source={emailInput} style={styles.imageStyle}/>
          <TextInput style={{flex: 1}} placeholder='Email'/>
        </View>

        <View style ={styles.passInputView}>
          <Image style={styles.imageStyle} source={ passInput} />
          <TextInput style={{flex: 1}} placeholder='Password' secureTextEntry={true}/>
        </View>

        <View style ={styles.loginBtn}>
          <Button  title='Login' style={styles.btnText}
          color='#FFFFFF'
         
          />
        </View>    
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

  backImage:{
    flex : 1,
    justifyContent: 'center'
  },
  emailInputView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6F8',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 45,
    width :295,
    borderRadius: 10,
    position:'absolute',
    top: 225, left:50,
    
  },
  imageStyle:{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  passInputView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6F8',
    borderWidth: 0.5,
    borderColor: '#fff',
    position:'absolute',
    top: 290, left:50,
    height: 45,
    width :295,
    borderRadius: 10,
  },
  loginBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14C6C6',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width :295,
    borderRadius: 20,
    position:'absolute',
    top: 402, left: 48,
  },
  crownlogo:{
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    height: 88, width: 119.99,
    top:64, left:137,

  },
  

  
});