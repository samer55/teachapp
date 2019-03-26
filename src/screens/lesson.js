import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
  Slider,
  Dimensions
} from 'react-native';
import { Thumbnail,Button,CardItem,Card, Icon, Left, Body,Right } from 'native-base';
const screenWidth = Dimensions.get('window').width
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { onSignIn } from "../auth";
import Masonry from 'react-native-masonry';
import Categories from '../components/teacher0'
// list of images
let data = [
  {
    data: {
      caption: 'Summer Recipies',
      user: {
        name: 'Henry'
      },
    },
    renderFooter: (data) => {
      return (
        <View key='brick-header' style={{backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9}}>
          <Text style={{lineHeight: 20, fontSize: 14}}>{data.caption}ddd</Text>
        </View>
      )
    },
    renderHeader: (data) => {
      return (
        <View key='brick-footer' style={styles.headerTop}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO3JMW5pmK-pq9g3T-1znMMK8IEELKnasQ6agJANePV7Z0nwp9w' }}
            style={styles.userPic}/>
          <Text style={styles.userName}>{data.user.name}</Text>
        </View>
      )
    }
  },

];

const addData = [
  {
    uri: 'https://i.pinimg.com/736x/48/ee/51/48ee519a1768245ce273363f5bf05f30--kaylaitsines-dipping-sauces.jpg'
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYfU5N8lsJepQyoAigiijX8bcdpahei_XqRWBzZLbxcsuqtiH'
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL2GTXDuOzwuX5X7Mgwc3Vc9ZIhiMmZUhp3s1wg0oHPzSP7qC'
  }
];

export default class Lessons extends Component {
  constructor() {
    super();
    const appendedData = [...data];

    this.state = {
      columns: 2,
      padding: 5,
      data:appendedData
    };
}

  render(){

    return(
      <View style={styles.container}>
      <ScrollView horizontal={true}>
      <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://www.macupdate.com/images/icons256/59967.png'}} />
              <Body>
                <Text>Opentiq</Text>
                <Text note>Irbid/ 30 street</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://www.zuaneducation.com/blog/wp-content/uploads/2017/12/Learn-Android-App-Development-from-Industry-Experts-2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button bordered  >
                <Text style={{paddingLeft:10,paddingRight:10,fontSize:15}}>Enroll</Text>
              </Button>
            </Left>

            <Right>
              <Text>50 $</Text>
            </Right>
          </CardItem>
        </Card>
        <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.macupdate.com/images/icons256/59967.png'}} />
                <Body>
                  <Text>Opentiq</Text>
                  <Text note>Irbid/ 30 street</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.zuaneducation.com/blog/wp-content/uploads/2017/12/Learn-Android-App-Development-from-Industry-Experts-2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button bordered  >
                  <Text style={{paddingLeft:10,paddingRight:10,fontSize:15}}>Enroll</Text>
                </Button>
              </Left>

              <Right>
                <Text>50 $</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://www.macupdate.com/images/icons256/59967.png'}} />
                  <Body>
                    <Text>Opentiq</Text>
                    <Text note>Irbid/ 30 street</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://www.zuaneducation.com/blog/wp-content/uploads/2017/12/Learn-Android-App-Development-from-Industry-Experts-2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button bordered  >
                    <Text style={{paddingLeft:10,paddingRight:10,fontSize:15}}>Enroll</Text>
                  </Button>
                </Left>

                <Right>
                  <Text>50 $</Text>
                </Right>
              </CardItem>
            </Card>
            
        </ScrollView>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    padding: 5,
    color: '#444',
  },
  postImage: {
    backgroundColor: '#eee',
  },
  postInfo: {
    padding: 3,
    alignItems: 'center',
  },
  postButtons: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  imagee: {
    flexGrow:1,
    height:200,
    width:170,

marginLeft:15,margin:5,
borderRadius:20
    // Set border Radius.

  },
  button: {
    flex: 3,
    padding: 5,
    margin: 6,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    backgroundColor: '#4285f4',
  },

  info: {
    fontSize: 15,
    color:'black',
    margin:10
  },
  bold: {
    fontWeight: 'bold',
    color:'steelblue'
  },
  boldd: {
    fontWeight: 'bold',
    fontSize:20

  },
})
