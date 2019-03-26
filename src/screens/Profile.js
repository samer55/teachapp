import React, { Component } from 'react'
import { View ,Image} from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { firebaseApp } from '../../firebase'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer

export default class Profile extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phone:'',
      skills:'',
 image: '',

 edu:'',
 type:'',
 bio:''
    }
  }
    componentDidMount() {
      const uid = this.props.appStore.user.uid

      console.log("--------- MY POSTS --------- " + uid)
      firebaseApp.database().ref('users/'+ uid ).on('value',
      (snapshot) => {
        val = snapshot.val()
        if (snapshot.val()) {
          this.setState({
            name:val.name,
            phone:val.phone,
image:val.image,
skills:val.skills,
edu:val.edu,
type:val.type,
bio:val.bio,
          })
        }

      })
    }
  render(){
    return(
      <View style={{ paddingVertical: 20 }}>
        <Card title={this.state.name}>
          <View
            style={{
              backgroundColor: "#ffffff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          <Image source={{ uri: this.state.image}} style={{   borderColor: 'grey',
          borderRadius: 55,
          borderWidth: 3,
          height: 110,
          marginBottom: 15,
          width: 110,}} />
            <Text style={{ color: "black", fontSize: 28 }}>I am a{this.state.type}</Text>
            <Text style={{ color: "black", fontSize: 28 }}>Skills: {this.state.skills}</Text>

            <Text style={{ color: "black", fontSize: 28 }}>Education Level: {this.state.edu}</Text>
            <Text style={{ color: "black", fontSize: 28 }}>Bio: {this.state.bio}</Text>

          </View>

          <Button
            backgroundColor="#03A9F4"
            title="SIGN OUT"
            onPress={this._logOut}
          />
        </Card>
      </View>
    )
  }

  _logOut = () => {
    firebaseApp.auth().signOut()
    .then(() => {
      this.props.appStore.username = ""
      this.props.appStore.user = {}
      this.props.appStore.post_count = 0
      this.props.appStore.chat_count = 0
      this.props.appStore.order_count = 0
    this.props.navigation.navigate('SignIn');
    }, function(error) {
      console.log(error)
    });
  }

}
