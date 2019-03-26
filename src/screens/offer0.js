import React, { Component } from 'react'
import { View,TouchableOpacity,Text ,ScrollView} from "react-native";
import { Container, Header, Content,Button, Form, Item, Input, Label,Picker,Icon,CheckBox } from 'native-base';
import { onSignOut } from "../auth";
import { firebaseApp } from '../../firebase'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer
export default class Offer extends Component{
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
             <Label>Title</Label>
             <Input />
           </Item>
           <Item floatingLabel last>
             <Label>Price</Label>
             <Input />
           </Item>
           <Picker
             mode="dropdown"
             iosIcon={<Icon name="ios-arrow-down-outline" />}
             placeholder="price per.."
             placeholderStyle={{ color: "#bfc6ea" }}
             placeholderIconColor="#007aff"
             style={{ width: undefined }}
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}
           >
             <Picker.Item label="Wallet" value="key0" />
             <Picker.Item label="ATM Card" value="key1" />
             <Picker.Item label="Debit Card" value="key2" />
             <Picker.Item label="Credit Card" value="key3" />
             <Picker.Item label="Net Banking" value="key4" />
           </Picker>
           <Item floatingLabel last>
             <Label>Place</Label>
             <Input />
           </Item>
           <Label>Available</Label>

                               </Form>
                               <ScrollView  horizontal={true}>
<View style={{flexDirection:'column'}}>
                               <Text style={{fontSize:15,color:'black',margin:5}}>Friday</Text>
                               <CheckBox checked={true} />
                               </View>
                               <View style={{flexDirection:'column'}}>

                               <Text style={{fontSize:15,color:'black',margin:5}}>Sunday</Text>
                               <CheckBox checked={true} />
                               </View>

                               <View style={{flexDirection:'column'}}>

                               <Text style={{fontSize:15,color:'black',margin:5}}>Monday</Text>
                               <CheckBox checked={true} />
                               </View>

                               <View style={{flexDirection:'column'}}>

                               <Text style={{fontSize:15,color:'black',margin:5}}>Wednesday</Text>
                               <CheckBox checked={true} />
                               </View>

                               <View style={{flexDirection:'column'}}>


                               <Text style={{fontSize:15,color:'black',margin:5}}>Tuesday</Text>
                               <CheckBox checked={true} />
                               </View>

                               <View style={{flexDirection:'column'}}>

                               <Text style={{fontSize:15,color:'black',margin:5}}>Thursday</Text>
                               <CheckBox checked={true} />
                               </View>

                               </ScrollView>
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
