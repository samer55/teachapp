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
import { Card, ListItem,Rating } from 'react-native-elements'
import { Thumbnail,Button} from 'native-base';
import { Constants, MapView, Location, Permissions } from 'expo';

const screenWidth = Dimensions.get('window').width
export default class Reqpage extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      counter: 1,
end:'',
      isLoading: true,
      mapRegion: null,
  hasLocationPermissions: false,
  locationResult: null,
      isEmpty: false,
      isFinished: false,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    }
  }
  componentDidMount() {
     this._getLocationAsync();
   }

   _handleMapRegionChange = mapRegion => {
     console.log(mapRegion);
     this.setState({ mapRegion });
   };

   _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
     this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
   };
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (
      <View style={styles.container}>
      <ScrollView >
      <View style={{width:'100%',backgroundColor:'#ffffff',height:null,flexDirection:'row'}}>
      <Thumbnail small style={{margin:10}} source={{uri: uri}} />
      <Text style={{fontSize:30,margin:10,fontWeight:'bold',color:'#0a4065',padding:5,margin:5}}>Samer Sukhni</Text>
      <Text style={{fontSize:17,textAlign:'center',alignSelf:'center',color:'#10a8e5',fontWeight:'800'}}>Verfied</Text>

      </View>
<View style={{width:'100%',backgroundColor:'#ffffff',height:null}}>
<Text style={{fontSize:17,textAlign:'center',alignSelf:'center',color:'#ff3907',fontWeight:'800'}}>7 Days Lefts</Text>
<Text style={{fontSize:30,fontWeight:'bold',color:'#4c505f',padding:5,margin:5}}>Looking for app developer</Text>
<Text style={{fontSize:15,fontWeight:'500',margin:5}}> <Text style={{fontSize:20,fontWeight:'bold',color:'#4c505f',padding:10,margin:5}}>80 $</Text>Per Hour</Text>

</View>

<View style={{width:'100%',backgroundColor:'#ffffff',height:null}}>

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontSize:20,fontWeight:'bold',color:'#4c505f',padding:10,margin:5}}>Description:</Text>
    </View>

    <Text style={{fontSize:20,fontWeight:'300',padding:7,margin:7}}>dsfdsfdsfdsfdsfdddddddddddfgdgdfgdfg dfg fdgd.</Text>


    </View>

    <View style={{width:'100%',backgroundColor:'#ffffff',height:null}}>


         {
           this.state.locationResult === null ?
           <Text>Finding your current location...</Text> :
           this.state.hasLocationPermissions === false ?
             <Text>Location permissions are not granted.</Text> :
             this.state.mapRegion === null ?
             <Text>Map region doesnt exist.</Text> :
             <MapView
               style={{ alignSelf: 'stretch', height: 400 }}
               region={this.state.mapRegion}
               onRegionChange={this._handleMapRegionChange}
             />
         }

         </View>
    
        </ScrollView>
        <View
          style={{height:40,justifyContent:'center',alignItems:'center',backgroundColor:'#0693e3'}}
        ><Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Offer your skill</Text></View>

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
        <ImageBackground
          source={{uri:uri}}
          imageStyle={{ borderRadius: 19 }}

          style=  {styles.imagee}               >
          <View
            style={{width:170,height:200,justifyContent:'flex-end'}} >
            <Text style={{fontSize:20,fontWeight:'bold'}}>
            itemName</Text>
          </View>
          </ImageBackground>          <Text style={styles.info}><Text style={styles.bold}>Offer Price :</Text>D</Text>
          <Text style={styles.info}><Text style={styles.bold}>Offer details :</Text>.</Text>


        </Card>
      )
    }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,justifyContent:'center'
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
    fontSize: 20,
    fontWeight:'500',
    color:'black',
    margin:10
  },
  bold: {
    fontWeight: 'bold',
    color:'#2196f3'
  },
  boldd: {
    fontWeight: 'bold',
    fontSize:20,
margin:5
  },
})
