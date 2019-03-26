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
  ImageBackground,
  Alert,
} from 'react-native'
import { Card, ListItem,Rating } from 'react-native-elements'
import { Thumbnail,Button} from 'native-base';
const screenWidth = Dimensions.get('window').width
import { LinearGradient } from 'expo';
import { colors } from '../styles/index.style';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Categories extends Component {
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

  get gradient () {
      return (
          <LinearGradient
            colors={[colors.background1, colors.background2]}
            startPoint={{ x: 1, y: 0 }}
            endPoint={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
      );
  }


  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (
      <View style={styles.container}>
      { this.gradient }
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<LinearGradient
  colors={['#d33115','#9900ef']}
  startPoint={{ x: 1, y: 0 }}
  endPoint={{ x: 0, y: 1 }}
  style={{width:190,height:100,marginLeft:15,margin:10,borderRadius:19,justifyContent:'center',alignItems:'center'}}
><TouchableOpacity onPress={() => {
  this.props.navigation.navigate('Development')

}}>
<Ionicons name="md-book" size={32} color="white" />

<Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Tutor</Text></TouchableOpacity>
</LinearGradient>
<LinearGradient
  colors={['#0693e3','#2ccce4']}
  startPoint={{ x: 1, y: 0 }}
  endPoint={{ x: 0, y: 1 }}
  style={{width:190,height:100,marginLeft:15,margin:10,borderRadius:19,justifyContent:'center',alignItems:'center'}}
><TouchableOpacity onPress={() => {
  this.props.navigation.navigate('Development')

}}>
<Ionicons name="ios-clipboard" size={32} color="white" />

<Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Request</Text></TouchableOpacity>
</LinearGradient>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<LinearGradient
  colors={['#4caf50','#009688']}
  startPoint={{ x: 1, y: 0 }}
  endPoint={{ x: 0, y: 1 }}
  style={{width:190,height:100,marginLeft:15,margin:10,borderRadius:19,justifyContent:'center',alignItems:'center'}}
><TouchableOpacity onPress={() => {
  this.props.navigation.navigate('Development')

}}>
<MaterialCommunityIcons name="map-marker-radius" size={32} color="white" />

<Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Near By</Text></TouchableOpacity>
</LinearGradient>
<LinearGradient
  colors={['#d9e3f0','#abb8c3']}
  startPoint={{ x: 1, y: 0 }}
  endPoint={{ x: 0, y: 1 }}
  style={{width:190,height:100,marginLeft:15,margin:10,borderRadius:19,justifyContent:'center',flexDirection:'column',alignItems:'center'}}
><TouchableOpacity onPress={() => {
  this.props.navigation.navigate('Development')

}}>
<Ionicons name="md-apps" size={32} color="white" />

<Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Categories</Text></TouchableOpacity>
</LinearGradient>

</View>

      <ScrollView >

      <Card containerStyle={{
      padding:10,width: Dimensions.get('window').width - 30,
      marginRight:7,
        // Setting up TextInput height as 50 pixel.

        // Set border width.


        // Set border Radius.
        borderRadius: 20 ,

        //Set background color of Text Input.
      }}
        titleStyle={{fontSize:30}}


      >
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>

      <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
      <Thumbnail small source={{uri: uri}} />
        <Text style={styles.boldd}>samer</Text>
      </View>
      <Text style={{fontSize:20,color:'red',fontWeight:'300'}}>OPEN/ 6 Day left</Text>

      </View>
      <Text style={styles.info}><Text style={styles.boldd}>Looking for :</Text> calculus jhhkkhkhkhkhkhkhjjkjkjkhkhjjkhhjkjhkjhkjhkhjkjhkjhkjhkjhkjhkjhkhjkhjhjkkhjhkjhkjhkjhkjhkjhkjhkjhjkhkhk</Text>

      <Text style={styles.info}> Budget (USD)</Text>
      <Text style={{fontSize:30,fontWeight:'200',color:'black'}}>$10-$20 per hour</Text>
      <Text style={styles.info}> Skill Required:</Text>
      <Text style={{fontSize:20,fontWeight:'200',color:'black'}}>bachloreas,diploma</Text>


      <Button block style={{width:170,height:30,padding:20}}>
           <Text style={{color:'white'}}>Share</Text>
         </Button>
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
