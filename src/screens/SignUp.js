import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  BackAndroid,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  Dimensions,
  Animated,
  Modal,
  Picker,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight,
} from 'react-native'
import { Button } from "react-native-elements";
import { onSignIn } from "../auth";
import { firebaseApp } from '../../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import PropTypes from 'prop-types';

@inject("appStore") @observer
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      init: true,
      errMsg: null,
      signUpSuccess: false,
      name: '',
      phone:'',
        info: '',
      email: '',
      password: '',
      time1:'',
      loc:'',
      week1:'',
      week2:'',
      labname:'',
      time2:'',
      uploadURL:'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Doctor-512.png',
      imagePath: null,
  imageHeight: null,
  imageWidth: null,

      modalVisible: false,
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          autoCapitalize='words'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder='username'
          placeholderTextColor='rgba(255,255,255,.6)'
        />
/>
        </View>
        const errorMessage = this.state.errMsg ? <Text style={styles.errMsg}>{this.state.errMsg}</Text> : null
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
          value={this.state.email}
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => this.setState({ email: text })}
          underlineColorAndroid='transparent'
          placeholder='Your Email'
          placeholderTextColor='rgba(255,255,255,.6)'
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          onSubmitEditing={(event) => {this._handleSignUp()}}
          underlineColorAndroid='transparent'
          placeholder='Choose Password'
          secureTextEntry={true}
          placeholderTextColor='rgba(255,255,255,.6)'/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this._handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _handleSignUp = () => {
    this.setState({errMsg: 'Signing Up...'})
    if (this.state.name.length < 5) {
      this.setState({errMsg: "Your name should be at least 5 characters."})
    }
    else if (this.state.email.length == 0) {
      this.setState({errMsg: "Please enter your email."})
    }
    else if (this.state.password.length == 0) {
      this.setState({errMsg: "Please enter your passowrd."})
    }
    else {
       firebaseApp.database().ref('usernameList').child(this.state.name.toLowerCase()).once('value', (snapshot) => {
         if (snapshot.val()) {
           this.setState({ errMsg: "Username not available." })
         }
         else {
          firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

          .then((user) => {
            const userId = firebaseApp.auth().currentUser.uid;
            const userem = firebaseApp.auth().currentUser.email;

            firebaseApp.database().ref('usernameList').child(this.state.name.toLowerCase()).set(userId)
            firebaseApp.auth().currentUser.updateProfile({displayName: this.state.name,photoURL:'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Doctor-512.png'})
            .then(() => {
              const userId = firebaseApp.auth().currentUser.uid;
const name = firebaseApp.auth().currentUser.displayName
              const imagep = 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Doctor-512.png'
              const post_count = 0
              const chat_count = 0
              const order_count = 0
              const email = firebaseApp.auth().currentUser.email;
              firebaseApp.database().ref('users/' + userId)
              .set({
              userId,
              name,
                email,
              })
              this.props.appStore.username = firebaseApp.auth().currentUser.displayName
              this.props.appStore.uid = firebaseApp.auth().currentUser.userId

              this.props.appStore.user = firebaseApp.auth().currentUser
              this.props.navigation.navigate('Up')
            }, function(error) {
              console.log(error);
            });
          })
          .catch((error) => {
            this.setState({ errMsg: error.message });
          })
        }
      })
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
