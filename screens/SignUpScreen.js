import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class Welcome extends Component 
{
  constructor()
  {
    super();
    this.state = 
    {
      emailID : '',
      password : '',
    }
  }

  userLogin = (emailId, password) =>
  {
    firebase.auth().signInWithEmailAndPassword(emailId, password).then(() => 
    {
      return Alert.alert("Successfully logged in !")
    })
    .catch((error) => 
    {
      var errorCode = error.code
      var errorMessage = error.message
      return Alert.alert(errorMessage)

    })
  }

  userSignUp = (emailId, password,) => 
  {
     firebase.auth().createUserWithEmailAndPassword(emailId, password).then(() => 
     {
       return Alert.alert("Successfully signed up !")
     .catch((error) => 
     {
       var errorCode = error.code
       var errorMessage = error.message
       return Alert.alert(errorMessage)

     })
    })
  }

  render()
  {
    return(
        <View>
        <TextInput placeholder = "abc@example.com" 
        keyboardType = 'email-address' 
        onChangeText = {(text) => 
        {
          this.setState(
            {
              emailID : text
            })
        }}>
        </TextInput>
        <TextInput 
        placeholder = "Enter Password"
        onChangeText = {(text) => 
        {
          this.setState(
            {
              password : text
            })
        }}>
        </TextInput>
        <TouchableOpacity onPress = {() => 
            {
              this.userLogin(this.state.emailID, this,state.password)
            }}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => 
            {
              this.userSignUp(this.state.emailID, this.state.password)
            }}>
            <Text>Sign Up</Text>
        </TouchableOpacity>
        </View>
    )
  }
}

