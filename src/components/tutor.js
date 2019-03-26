import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ListView,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
} from 'react-native'
import { Rating } from 'react-native-elements'
import { Thumbnail,Button,CardItem,Card, Icon, Left, Body,Right } from 'native-base';
const screenWidth = Dimensions.get('window').width
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class Tutor extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      counter: 1,
end:'',
      isLoading: true,
      isEmpty: false,
      isFinished: false,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    }
  }



  render() {
    const uri = "https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg";

    return (
      <View style={styles.container}>
      <ScrollView horizontal={true}>
      <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: uri}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
            <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
              <FontAwesome name="heart-o" size={30} color="red" />
              </Button>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
I am mathematic tutor with 5+ years experience..
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
              <Rating size={20} imageSize={20}  fractions="{1}" startingValue="{3.3}" />
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Text>5$/lesson</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: uri}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                <FontAwesome name="heart-o" size={30} color="red" />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
  I am mathematic tutor with 5+ years experience..
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Rating size={20} imageSize={20}  fractions="{1}" startingValue="{3.3}" />
                </Button>
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>5$/lesson</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: uri}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
                <Right>
                  <Button transparent textStyle={{color: '#87838B'}}>
                  <FontAwesome name="heart-o" size={30} color="red" />
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
    I am mathematic tutor with 5+ years experience..
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                  <Rating size={20} imageSize={20}  fractions="{1}" startingValue="{3.3}" />
                  </Button>
                </Left>
                <Right>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Text>5$/lesson</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: uri}} />
                    <Body>
                      <Text>NativeBase</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Button transparent textStyle={{color: '#87838B'}}>
                    <FontAwesome name="heart-o" size={30} color="red" />
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
      I am mathematic tutor with 5+ years experience..
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                    <Rating size={20} imageSize={20}  fractions="{1}" startingValue="{3.3}" />
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent textStyle={{color: '#87838B'}}>
                      <Text>5$/lesson</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: uri}} />
                      <Body>
                        <Text>NativeBase</Text>
                        <Text note>April 15, 2016</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Button transparent textStyle={{color: '#87838B'}}>
                      <FontAwesome name="heart-o" size={30} color="red" />
                      </Button>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
        I am mathematic tutor with 5+ years experience..
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}}>
                      <Rating size={20} imageSize={20}  fractions="{1}" startingValue="{3.3}" />
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text>5$/lesson</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
        </ScrollView>
      </View>
    )
  }

  _renderRow = (data) => {


      return (
        <Card containerStyle={{textAlign: 'center',

          // Setting up TextInput height as 50 pixel.

          // Set border width.
          borderWidth: 2,

          // Set border Hex Color Code Here.
          shadowOffset:{  width: 1,  height: 1,  },
          shadowColor: 'black',

          // Set border Radius.
          borderRadius: 20 ,

          //Set background color of Text Input.
        }}
          titleStyle={{fontSize:30}}

          title='name'
        >

          <Text style={styles.info}><Text style={styles.bold}>Offer Price :</Text>D</Text>
          <Text style={styles.info}><Text style={styles.bold}>Offer details :</Text>.</Text>


        </Card>
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
