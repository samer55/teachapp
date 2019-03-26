import React, { Component } from 'react'
import { View,TouchableOpacity,Text ,ScrollView} from "react-native";
import { Container, Header, Content,Button, Form, Item, Input, Label,Picker,Icon } from 'native-base';
import { onSignOut } from "../auth";
import {CheckBox} from 'react-native-elements'
import { firebaseApp } from '../../firebase'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer
export default class Offer extends Component{
  constructor(props) {
   super(props);
   this.state = {
     selected: undefined,
selectedButton: null,
Title:'',
Price:'',
color:'#ededed',
color1:'#ededed',
color2:'#ededed',
color3:'#ededed',
color4:'#ededed',
color5:'#ededed',
color6:'#ededed',

isChecked1:true,
isChecked2:true,
textc:'black',
textc1:'black',
textc2:'black',
textc3:'black',
textc4:'black',
textc5:'black',
textc6:'black',

isChecked3:true,
isChecked4:true,
isChecked5:true,
isChecked6:true,
isChecked7:true,
isChecked8:true,
isChecked9:true,
isChecked0:true,
tex:'',
Description:'',
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
 sunday() {
   if(this.state.color=='#ededed'){
     this.setState({color:'#0693e3',textc:'white'})
   }
   else {
     this.setState({color:'#ededed',textc:'black'})

   }
 }
 monday() {
   if(this.state.color1=='#ededed'){
     this.setState({color1:'#0693e3',textc1:'white'})
   }
   else {
     this.setState({color1:'#ededed',textc1:'black'})

   }
 }
 tuesday() {
   if(this.state.color2=='#ededed'){
     this.setState({color2:'#0693e3',textc2:'white'})
   }
   else {
     this.setState({color2:'#ededed',textc2:'black'})

   }
 }
 wednesday() {
   if(this.state.color3=='#ededed'){
     this.setState({color3:'#0693e3',textc3:'white'})
   }
   else {
     this.setState({color3:'#ededed',textc3:'black'})

   }
 }
 thursday() {
   if(this.state.color4=='#ededed'){
     this.setState({color4:'#0693e3',textc4:'white'})
   }
   else {
     this.setState({color4:'#ededed',textc4:'black'})

   }
 }
 friday() {
   if(this.state.color5=='#ededed'){
     this.setState({color5:'#0693e3',textc5:'white'})
   }
   else {
     this.setState({color5:'#ededed',textc5:'black'})

   }
 }
 saturday() {
   if(this.state.color6=='#ededed'){
     this.setState({color6:'#0693e3',textc6:'white'})
   }
   else {
     this.setState({color6:'#ededed',textc6:'black'})

   }
 }

  render(){
    return(
      <Container>
       <Content>
         <Form>
           <Item floatingLabel>
             <Label>Title</Label>
             <Input  onChangeText={(text) => this.setState({ Title: text })}/>
           </Item>
           <Item floatingLabel last>
             <Label>Description..</Label>
             <Input onChangeText={(text) => this.setState({ Description: text })}/>
           </Item>
           <Item floatingLabel last>
             <Label>location to study...</Label>
             <Input onChangeText={(text) => this.setState({ location: text })}/>
           </Item>
           <Item floatingLabel last>
             <Label>Price</Label>
             <Input onChangeText={(text) => this.setState({ Price: text })}/>
           </Item>
           <View style={{flexDirection:'row'}}>
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
             <Picker.Item label="Hour" value="key0" />
             <Picker.Item label="Lesson" value="key1" />
             <Picker.Item label="Full subject" value="key2" />
             <Picker.Item label="Chapter" value="key3" />
             <Picker.Item label="Others" value="key4" />
           </Picker>

           <Item>
           <Picker
             mode="dropdown"
             iosIcon={<Icon name="ios-arrow-down-outline" />}
             placeholder="Categories.."
             placeholderStyle={{ color: "#bfc6ea" }}
             placeholderIconColor="#007aff"
             style={{ width: undefined }}
             selectedValue={this.state.selected}
             onValueChange={this.onValueChange.bind(this)}
           >
             <Picker.Item label="School and univerity" value="key0" />
             <Picker.Item label="Development" value="key1" />
             <Picker.Item label="Business" value="key2" />
             <Picker.Item label="Test prep" value="key3" />
             <Picker.Item label="IT" value="key4" />
             <Picker.Item label="Design" value="key4" />
             <Picker.Item label="Marketing" value="key4" />
             <Picker.Item label="Personal Development" value="key4" />
             <Picker.Item label="Photography" value="key4" />
             <Picker.Item label="Music" value="key4" />
             <Picker.Item label="Language" value="key4" />
             <Picker.Item label="Health and fitness" value="key4" />
             <Picker.Item label="Office Productivity" value="key4" />
             <Picker.Item label="Lifestyle" value="key4" />

           </Picker>
           </Item>
           </View>

                               </Form>
                               <Item>
                               <Label>Days to Teach</Label>
</Item>
                               <ScrollView  horizontal={true}>
<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color,height:50,borderRadius:15}} onPress={this.sunday.bind(this)}>
<Text style={{color:this.state.textc,fontSize:20,padding:10}}>Sunday</Text>
</TouchableOpacity>
                                                             </View>
<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color1,height:50,borderRadius:15}} onPress={this.monday.bind(this)}>
<Text style={{color:this.state.textc1,fontSize:20,padding:10}}>Monday</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color2,height:50,borderRadius:15}} onPress={this.tuesday.bind(this)}>
<Text style={{color:this.state.textc2,fontSize:20,padding:10}}>Tuesday</Text>
</TouchableOpacity>
</View>
<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color3,height:50,borderRadius:15}} onPress={this.wednesday.bind(this)}>
<Text style={{color:this.state.textc3,fontSize:20,padding:10}}>Wednesday</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color4,height:50,borderRadius:15}} onPress={this.thursday.bind(this)}>
<Text style={{color:this.state.textc4,fontSize:20,padding:10}}>Thursday</Text>
</TouchableOpacity>
</View>
<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color5,height:50,borderRadius:15}} onPress={this.friday.bind(this)}>
<Text style={{color:this.state.textc5,fontSize:20,padding:10}}>Friday</Text>
</TouchableOpacity>
</View>
<View style={{flexDirection:'column',margin:10}}>
<TouchableOpacity style={{backgroundColor:this.state.color6,height:50,borderRadius:15}} onPress={this.saturday.bind(this)}>
<Text style={{color:this.state.textc6,fontSize:20,padding:10}}>Saturday</Text>
</TouchableOpacity>
</View>
                               </ScrollView>
<Button block rounded  style={{margin:10}} >
<Text style={{color:'white',fontSize:20}}>Post</Text>
</Button>
       </Content>
     </Container>
    )
  }
  _handleNewPost = () => {
    this.setState({
      postStatus: 'Posting...',
    })

      if (this.state.postTitle.length > 0) {
        if (this.state.postPrice.length > 0) {
          const uid = this.props.appStore.user.uid
          const username = this.props.appStore.user.displayName
          const newPostKey = firebaseApp.database().ref('text').push().key
            const postData = {
              username: this.props.appStore.user.displayName,
              uid: uid,
              labn:this.state.namea,

              createdAt: firebase.database.ServerValue.TIMESTAMP,
              updatedAt: firebase.database.ServerValue.TIMESTAMP,
              status: "available",
              clientId: "",
              clientName: "",
              new_messages: 0,
              timeout:timeou,
              text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
              title: this.state.postTitle,
              price: this.state.postPrice,
              puid: newPostKey,
            }
            let updates = {}

            updates['/text/' + newPostKey] = postData
            updates['/user_posts/' + uid + '/text/' + newPostKey] = postData

            firebaseApp.database().ref().update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'Posted! Thank You.',
                              postTitle: '',
                              new:newPostKey,
                              postPrice: '',
                              postText: '',
                              favSport:'',
                            })

              setTimeout(() => {
              }, 1000)
            })
            .catch(() => {
              this.setState({ postStatus: 'Something went wrong!!!' })
            })

          .catch(error => {
            console.log(error)
          })

        } else {
          this.setState({ postStatus: 'Please enter a price' })
        }
      } else {
        this.setState({ postStatus: 'Please enter a title' })
      }

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
