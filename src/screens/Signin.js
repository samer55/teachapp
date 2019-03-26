import React from "react";
import { View ,Platform,Text,  TextInput,
  BackAndroid,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  StyleSheet,} from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import PropTypes from 'prop-types';
import { firebaseApp } from '../../firebase'
import { observer,inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer
export default  class Signin extends React.Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      init: true,
      errMsg: null,
      forgotPass: false,
      email: '',
      password: ''
    }
  }
  render(){
    return(
      <View style={{ paddingVertical: 20 }}>
      const errorMessage = this.state.errMsg ? <Text style={styles.errMsg}>{this.state.errMsg}</Text> : null

        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput              
                        onChangeText={(text) => this.setState({ email: text })}

 placeholder="Email address..." />
          <FormLabel>Password</FormLabel>
          <FormInput                onChangeText={(text) => this.setState({ password: text })}
secureTextEntry placeholder="Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={this._handleSignIn}
          />
        </Card>
      </View>
    )
  }
  _handleSignIn = () => {
    this.setState({errMsg: 'Signing In...'})
    if (this.state.email.length == 0) {
      this.setState({errMsg: "Please enter your email."})
    }
    else if (this.state.password.length == 0) {
      this.setState({errMsg: "Please enter your passowrd."})
    }
    else {
      firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {


    this.props.appStore.user = user
    this.props.appStore.username = user.displayName
    firebaseApp.database().ref('users').child(user.uid).once('value')
    .then((snapshot) => {
      this.props.navigation.navigate('home')
    }) })

      .catch((error) => {
        this.setState({ errMsg: error.message })
      })
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  errMsg: {
    width: 280,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 5
  },
  inputField: {
    width: 280,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#fff'
  },
  btnContainers: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280
  },
  forgotBtnContainer: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  forgotBtn: {
    fontSize: 12,
    color: '#fff',
  },
  submitBtnContainer: {
    width: 120,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtn: {
    fontWeight: '800',
    fontSize: 20,
    color: 'red'
  }
})
