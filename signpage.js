import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput} from 'react-native';
import { useState } from 'react';


export default function Signinpage( ) {

 /**IMAGGESSSS */

  const bgSign = require('../assets/projectImages/placeHoldSg.png')
  const emailInput = require("../assets/projectImages/loginPEmail.png");
  const fullname = require("../assets/projectImages/sGname.png");
  const passInput = require("../assets/projectImages/loginPpass.png");
  const crownLogo = require("../assets/projectImages/crownLogo.png");
  return (
    <ImageBackground source={bgSign} style={styles.backImage}>
      
      <Image source={crownLogo}
      style={styles.crownlogo}
      />
      
      <View style ={styles.name}>
      <Image source={fullname} style={styles.imageStyle}/>
      <TextInput style={{flex: 1}} placeholder='Full Name'/>
      </View>

    <View style ={styles.emailInputView}>
      <Image source={emailInput} style={styles.imageStyle}/>
      <TextInput style={{flex: 1}} placeholder='Email'/>
    </View>

    <View style ={styles.passInputView}>
          <Image style={styles.imageStyle} source={ passInput} />
          <TextInput style={{flex: 1}} placeholder='Password' secureTextEntry={true}/>
    </View>

    <View style ={styles.loginBtn}>
          <Button  title='Register' style={styles.btnText}
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
    top: 295, left:50,
  },
  imageStyle:{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  name:{
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
  passInputView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6F8',
    borderWidth: 0.5,
    borderColor: '#fff',
    position:'absolute',
    top: 350, left:50,
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
    top: 435, left: 48,
  },
  crownlogo:{
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    height: 88, width: 119.99,
    top:64, left:137,

  },
});
