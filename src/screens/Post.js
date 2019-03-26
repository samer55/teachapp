import React, {Component} from 'react'
import {TouchableOpacity, View ,StatusBar,SafeAreaView,StyleSheet,Image,Text} from "react-native";
import { Card, Button, FormLabel, FormInput,SearchBar } from "react-native-elements";
import { onSignIn } from "../auth";
import { Constants, Svg } from 'expo';
import Offer from '../components/offer'
import Reqpost from '../components/reqpost'

import { Container, Header, Content, Tab, Tabs } from 'native-base';
export default class Post extends Component {
  render(){
    return(

      <Container>
<Tabs>
<Tab heading="Offer">
<Offer/>
</Tab>
<Tab heading="Request">
<Reqpost />
</Tab>

</Tabs>
</Container>


    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,

  },
  header: {
    flexGrow: 1
  },
  buttonGroup: {
    flexGrow: 1
  },
  slider: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#dbdcdb',
    padding: 10,
    marginRight: 4,
    borderRadius: 4,
    borderBottomColor: '#7b7b7b',
    borderBottomWidth: 5
  },
  buttonText: {
    color: '#404040'
  },
  center: {
    marginTop: 30,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTop: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userPic: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10
  },
  userName: {
    fontSize: 20
  }
});
