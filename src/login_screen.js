import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native'
import PropTypes from 'prop-types';
const screenWidth = Dimensions.get('window').width
const screen = Dimensions.get('window').height


import Signin from './screens/Signin'
import SignUp from './screens/SignUp'
import { firebaseApp } from '../firebase'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialScreen: true,
      signIn: false,
      signUp: false,
      forgotPass: false
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    _unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.appStore.user = user
        this.props.appStore.username = user.displayName
        firebaseApp.database().ref('users').child(user.uid).once('value')
        .then((snapshot) => {
          this.props.navigation.navigate('home')
        })
   }
      else {
        this.setState({ initialScreen: true })
      }
      _unsubscribe()
    })
  }
  static navigationOptions = {
     title: 'SignUp',
   };
  componentWillUnmount() {
  }

  componentWillMount() {
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
       this.props.navigation.navigate((user) ? 'loading' : 'login')
     })
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {

    const signIn = this.state.signIn ?
      <Signin

        navigation={this.props.navigation}/>
    : null

    const signUp = this.state.signUp ?
      <SignUp
        onBackFromSignUp={this._onBackFromSignUp} navigation={this.props.navigation}/>
    : null


    return (
        <SignUp

          navigation={this.props.navigation}/>
        )
  }

  _onLogoClicked = () => {
    this.setState({
      initialScreen: true,
      signIn: false,
      signUp: false,
      forgotPass: false
    })
  }

  _onSignIn = () => {
    this.setState({
      initialScreen: false,
      signIn: true
    })
  }

  _onBackFromSignIn = () => {
    this.setState({
      initialScreen: true,
      signIn: false
    })
  }

  _onSignUp = () => {
    this.setState({
      initialScreen: false,
      signUp: true
    })
  }

  _onBackFromSignUp = () => {
    this.setState({
      initialScreen: true,
      signUp: false
    })
  }

  _onForgotPass = () => {
    this.setState({
      initialScreen: false,
      signIn: false,
      signUp: false,
      forgotPass: true
    })
  }

  _onBackFromForgotPass = () => {
    this.setState({
      initialScreen: true,
      forgotPass: false
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage : {
    height: 220,
    width: 220,
  },
  imag: {
    flexGrow:1,
    width:screenWidth,
  height:screen
  },
})
