import React, { Component } from 'react'
import { View,TouchableOpacity,Text ,ScrollView} from "react-native";
import { Container, Header, Content,Button, Form, Item, Input, Label,Picker,Icon,CheckBox } from 'native-base';
import { onSignOut } from "../auth";
import { firebaseApp } from '../../firebase'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer
export default class Reqpost extends Component{
  constructor(props) {
   super(props);
   this.state = {
     selected: undefined,
selectedButton: null
   };
   this.selectionOnPress = this.selectionOnPress.bind(this);

 }
 onValueChange(value: string) {
   this.setState({
     selected: value
   });
 }
 selectionOnPress(userType) {
     this.setState({ selectedButton: userType });
 }

  render(){
    return(
      <Container>
       <Content>
         <Form>
           <Item floatingLabel>
             <Label>Looking for..</Label>
             <Input />
           </Item>
           <Item floatingLabel last>
             <Label>Budget..</Label>
             <Input />
           </Item>
           <Picker
             mode="dropdown"
             iosIcon={<Icon name="ios-arrow-down-outline" />}
             placeholder="Budget per.."
             placeholderStyle={{ color: "#bfc6ea" }}
             placeholderIconColor="#007aff"
             style={{ width: undefined }}
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}
           >
             <Picker.Item label="Hour" value="key0" />
             <Picker.Item label="lesson" value="key1" />
             <Picker.Item label="All subject" value="key2" />
             <Picker.Item label="Chapter" value="key3" />
             <Picker.Item label="Level" value="key4" />
           </Picker>
           <Item floatingLabel last>
             <Label>Place to lesson..</Label>
             <Input />
           </Item>
           <Label style={{textAlign:'center',margin:5}}>Where you want to post it</Label>

                               </Form>
                               <Picker
                                 mode="dropdown"
                                 iosIcon={<Icon name="ios-arrow-down-outline" />}
                                 placeholder="Select category.."
                                 placeholderStyle={{ color: "#bfc6ea" }}
                                 placeholderIconColor="#007aff"
                                 style={{ width: undefined }}
                                 selectedValue={this.state.selected}
                                 onValueChange={this.onValueChange.bind(this)}
                               >
                                 <Picker.Item label="School & Univerity" value="key0" />
                                 <Picker.Item label="Development" value="key1" />
                                 <Picker.Item label="Business" value="key2" />
                                 <Picker.Item label="Test Prep" value="key3" />
                                 <Picker.Item label="IT" value="key4" />
                                 <Picker.Item label="Design" value="key4" />
                                 <Picker.Item label="Marketing" value="key4" />
                                 <Picker.Item label="Personal Development" value="key4" />
                                 <Picker.Item label="Photography" value="key4" />
                                 <Picker.Item label="Music" value="key4" />
                                 <Picker.Item label="Language" value="key4" />
                                 <Picker.Item label="Health & Fitness" value="key4" />
                                 <Picker.Item label="Office Productivity" value="key4" />
                                 <Picker.Item label="Lifestyle" value="key4" />

                               </Picker>
<Button block rounded  style={{margin:10}} >
<Text style={{color:'white',fontSize:20}}>Post</Text>
</Button>
       </Content>
     </Container>
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
