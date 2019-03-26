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
import { Card, ListItem,Rating,CheckBox } from 'react-native-elements'
import { Thumbnail,Button} from 'native-base';
import { Constants, MapView, Location, Permissions } from 'expo';

const screenWidth = Dimensions.get('window').width
export default class Tutpro extends Component {
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
    const uri = "https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg";

    return (
      <View style={styles.container}>
      <ScrollView >
<View style={{flexDirection:'row',backgroundColor:'white'}}>
<View  style={{justifyContent:'center',padding:10}}>
<Text style={{fontSize:23,color:'black',fontWeight:'800',padding:10}}>Samer Alsukhni</Text>
<Text style={{fontSize:18,color:'silver',fontWeight:'400',padding:10}}>Math tutor</Text>
<Rating
type="star"
fractions={1}
startingValue={3.6}
readonly
imageSize={23}
onFinishRating={this.ratingCompleted}
style={{ paddingVertical: 1,padding:10 }}
/>
<Button bordered style={{padding:10,alignSelf:'center',margin:5,width:150,alignItems:'center'}} Primary>
       <Text style={{color:'darkblue',textAlign:'center'}}>Contact</Text>
     </Button>
</View>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Thumbnail style={{width:150,height:150}} source={{uri: uri}} />

</View>
</View>
      <Card containerStyle={{
padding:10,width: Dimensions.get('window').width - 30,
marginRight:7,  shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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
        <Text style={styles.boldd}>Description:</Text>
    </View>

    </View>
    <Text style={{fontSize:15,fontWeight:'400'}}> calculus jhhkkhkhkhkhkhkhjjkjkjkhkhjjkhhjkjhkjhkjhkhjkjhkjhkjhkjhkjhkjhkhjkhjhjkkhjhkjhkjhkjhkjhkjhkjhkjhjkhkhk</Text>

    <Text style={styles.boldd}> Budget (USD)</Text>
    <Text style={{fontSize:30,fontWeight:'200',color:'black'}}>$10-$20 per hour</Text>
    <Text style={styles.boldd}>Education level:</Text>
    <Text style={{fontSize:20,fontWeight:'200',color:'black'}}>Diploma 4-5 years</Text>


      </Card>
      <Card containerStyle={{
padding:10,width: Dimensions.get('window').width - 30,
marginRight:7, shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
        // Setting up TextInput height as 50 pixel.

        // Set border width.


        // Set border Radius.
        borderRadius: 20 ,

        //Set background color of Text Input.
      }}
        titleStyle={{fontSize:30}}


      >
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.info}><Text style={styles.boldd}>More skills :</Text>.</Text>
    </View>

    <Text style={{fontSize:20,fontWeight:'300'}}>Mathematics tutor,English tutor,developing skills.</Text>


      </Card>

      <Card containerStyle={{
  padding:10,width: Dimensions.get('window').width - 30,
  marginRight:7, shadowColor: '#000',
      shadowOffset: { width: 4, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
        // Setting up TextInput height as 50 pixel.

        // Set border width.


        // Set border Radius.
        borderRadius: 20 ,

        //Set background color of Text Input.
      }}
        titleStyle={{fontSize:30}}


      >
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.info}><Text style={styles.boldd}>Availability</Text>.</Text>
    </View>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<ScrollView  horizontal={true}>

<Text style={{fontSize:15,color:'black'}}>Friday</Text>
<CheckBox checked={true} />
<Text style={{fontSize:15,color:'black'}}>Sunday</Text>
<CheckBox checked={true} />
<Text style={{fontSize:15,color:'black'}}>Monday</Text>
<CheckBox checked={true} />
<Text style={{fontSize:15,color:'black'}}>Wednesday</Text>
<CheckBox checked={true} />
<Text style={{fontSize:15,color:'black'}}>Tuesday</Text>
<CheckBox checked={true} />
<Text style={{fontSize:15,color:'black'}}>Thursday</Text>
<CheckBox checked={true} />
</ScrollView>

</View>




      </Card>

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
    flex: 1,justifyContent:'center',backgroundColor:'white'
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
