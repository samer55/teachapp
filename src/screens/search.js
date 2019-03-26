import React, {Component} from 'react'
import { View ,StatusBar,SafeAreaView} from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text,H1 , List, ListItem, Left, Right} from 'native-base';
import { onSignIn } from "../auth";
import styles, { colors } from '../styles/index.style';

import Categories from '../components/teacher0'
export default class search extends Component {
  render(){
    return(

      <Container>

                       <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
           <H1 style={{alignSelf:'center',margin:20}}>Find the ideal tutor today.</H1>
           <Text style={{marginTop:10,alignSelf:'center',}}>Lesson location</Text>
           <ListItem selected style={{alignSelf:'center',}}>
          <Left>
            <Text>Irbid</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <Text style={{marginTop:10,alignSelf:'center',}}>Categories</Text>
        <ListItem selected style={{alignSelf:'center',}}>
       <Left>
         <Text>Education</Text>
       </Left>
       <Right>
         <Icon name="arrow-forward" />
       </Right>
     </ListItem>
     <Text style={{marginTop:10,alignSelf:'center',}}>Subject</Text>
     <ListItem selected style={{alignSelf:'center',}}>
    <Left>
      <Text>Physics</Text>
    </Left>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
        </Container>


    )
  }
}
