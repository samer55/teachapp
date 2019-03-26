import React, {Component} from 'react'
import { ScrollView, Text, Linking, View,SafeAreaView,
  Animated,
  Image,
  StyleSheet,
  Dimensions,Platform,StatusBar,ImageBackground,TextInput,TouchableOpacity } from "react-native";
import { Card,Header ,Left,Body,Right,CardItem} from 'native-base';
import Slide from '../components/swiper'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import { LinearGradient } from 'expo';
import { iOSUIKit } from 'react-native-typography'
import Teacher from '../components/teacher'
import { Thumbnail,Button} from 'native-base';
import Near from '../components/near'
import Tutor from '../components/tutor'
import Lessons from './lesson'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MapView } from 'expo';
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
export default class Home extends Component {
  constructor (props) {
         super(props);
           this.offset = 0;
         this.state = {

           scrollOffset: new Animated.Value(0),
             titleWidth: 0,
             slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
             markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "App development",
        description: "i will teach you how to develop app in react native",
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "Design logo ",
        description: "i will teach how to design logo in adobe..",
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "Calculus 2 review",
        description: "Full calculus 2 Review include inverse func",
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "Physics Tawjihi",
        description: "full review of fundemental of physics",
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
         };
     }

     _renderItem ({item, index}) {
         return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
     }

     _renderItemWithParallax ({item, index}, parallaxProps) {
         return (
             <SliderEntry
               data={item}
               even={(index + 1) % 2 === 0}
               parallax={true}
               parallaxProps={parallaxProps}
             />
         );
     }

     _renderLightItem ({item, index}) {
         return <SliderEntry data={item} even={false} />;
     }

     _renderDarkItem ({item, index}) {
         return <SliderEntry data={item} even={true} />;
     }
     componentWillMount() {
   this.index = 0;
   this.animation = new Animated.Value(0);
 }
 componentDidMount() {
   // We should detect when scrolling has stopped then animate
   // We should just debounce the event listener here
   this.state.scrollOffset.addListener(({ value }) => (this.offset = value));

   this.animation.addListener(({ value }) => {
     let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
     if (index >= this.state.markers.length) {
       index = this.state.markers.length - 1;
     }
     if (index <= 0) {
       index = 0;
     }

     clearTimeout(this.regionTimeout);
     this.regionTimeout = setTimeout(() => {
       if (this.index !== index) {
         this.index = index;
         const { coordinate } = this.state.markers[index];
         this.map.animateToRegion(
           {
             ...coordinate,
             latitudeDelta: this.state.region.latitudeDelta,
             longitudeDelta: this.state.region.longitudeDelta,
           },
           350
         );
       }
     }, 10);
   });
 }
 onScroll = e => {
   const scrollSensitivity = 4 / 3;
   const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
   this.state.scrollOffset.setValue(offset);
 };

 getListItems = count => {
   const items = [];
   let i = 0;

   while (i < count) {
     i++;

     items.push(
       <View
         style={[
           styles.listItem,
           { backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd' },
         ]}>
         <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
       </View>
     );
   }

   return items;
 };


       _handleMapRegionChange = mapRegion => {
         this.setState({ mapRegion });
       };

       _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            locationResult: 'Permission to access location was denied',
            location,
          });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location), location, });
      };

     mainExample (number, title) {
         const { slider1ActiveSlide } = this.state;
         const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

         return (
             <View style={styles.exampleContainer}>
             <View style={{flexDirection:'row',justifyContent:'space-around'}}>
             <View>
                 <Text style={styles.title}>{`Find Teacher`}</Text>
                 <Text style={styles.subtitle}>{title}</Text>
                 </View>
                 <View >
                 <Thumbnail  source={{uri: uri}} />

                 </View>
                 </View>
                 <Carousel
                   ref={c => this._slider1Ref = c}
                   data={ENTRIES1}
                   renderItem={this._renderItemWithParallax}
                   sliderWidth={sliderWidth}
                   itemWidth={itemWidth}
                   hasParallaxImages={true}
                   firstItem={SLIDER_1_FIRST_ITEM}
                   inactiveSlideScale={0.94}
                   inactiveSlideOpacity={0.7}
                   // inactiveSlideShift={20}
                   containerCustomStyle={styles.slider}
                   contentContainerCustomStyle={styles.sliderContentContainer}
                   loop={true}
                   loopClonesPerSide={2}
                   autoplay={true}
                   autoplayDelay={500}
                   autoplayInterval={3000}
                   onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                 />
                 <Pagination
                   dotsLength={ENTRIES1.length}
                   activeDotIndex={slider1ActiveSlide}
                   containerStyle={styles.paginationContainer}
                   dotColor={'rgba(255, 255, 255, 0.92)'}
                   dotStyle={styles.paginationDot}
                   inactiveDotColor={colors.black}
                   inactiveDotOpacity={0.4}
                   inactiveDotScale={0.6}
                   carouselRef={this._slider1Ref}
                   tappableDots={!!this._slider1Ref}
                 />
             </View>
         );
     }

     momentumExample (number, title) {
         return (
             <View style={styles.exampleContainer}>
                 <Text style={styles.title}>{`Example ${number}`}</Text>
                 <Text style={styles.subtitle}>{title}</Text>
                 <Carousel
                   data={ENTRIES2}
                   renderItem={this._renderItem}
                   sliderWidth={sliderWidth}
                   itemWidth={itemWidth}
                   inactiveSlideScale={0.95}
                   inactiveSlideOpacity={1}
                   enableMomentum={true}
                   activeSlideAlignment={'start'}
                   containerCustomStyle={styles.slider}
                   contentContainerCustomStyle={styles.sliderContentContainer}
                   activeAnimationType={'spring'}
                   activeAnimationOptions={{
                       friction: 4,
                       tension: 40
                   }}
                 />
             </View>
         );
     }

     layoutExample (number, title, type) {
         const isTinder = type === 'tinder';
         return (
             <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                 <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>{`Find your best teacher ${number}`}</Text>
                 <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text>
                 <Carousel
                   data={isTinder ? ENTRIES2 : ENTRIES1}
                   renderItem={isTinder ? this._renderLightItem : this._renderItem}
                   sliderWidth={sliderWidth}
                   itemWidth={itemWidth}
                   containerCustomStyle={styles.slider}
                   contentContainerCustomStyle={styles.sliderContentContainer}
                   layout={type}
                   loop={true}
                 />
             </View>
         );
     }

     customExample (number, title, refNumber, renderItemFunc) {
         const isEven = refNumber % 2 === 0;

         // Do not render examples on Android; because of the zIndex bug, they won't work as is
         return !IS_ANDROID ? (
             <View style={[styles.exampleContainer, isEven ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                 <Text style={[styles.title, isEven ? {} : styles.titleDark]}>{`Find your next teacher ${number}`}</Text>
                 <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>{title}</Text>
                 <Carousel
                   data={isEven ? ENTRIES2 : ENTRIES1}
                   renderItem={renderItemFunc}
                   sliderWidth={sliderWidth}
                   itemWidth={itemWidth}
                   containerCustomStyle={styles.slider}
                   contentContainerCustomStyle={styles.sliderContentContainer}
                   scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
                   slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
                   useScrollView={true}
                 />
             </View>
         ) : false;
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

     render () {
         const example1 = this.mainExample(1, 'Search for your best lesson');
         const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');
         const example3 = this.layoutExample(3, '"Stack of cards" layout | Loop', 'stack');
         const example4 = this.layoutExample(4, '"Tinder-like" layout | Loop', 'tinder');
         const example5 = this.customExample(5, 'Custom animation 1', 1, this._renderItem);
         const example6 = this.customExample(6, 'Custom animation 2', 2, this._renderLightItem);
         const example7 = this.customExample(7, 'Custom animation 3', 3, this._renderDarkItem);
         const example8 = this.customExample(8, 'Custom animation 4', 4, this._renderLightItem);
         const interpolations = this.state.markers.map((marker, index) => {
              const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
              ];
              const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
              });
              const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: "clamp",
              });
              return { scale, opacity };
            });
            const { scrollOffset } = this.state;
            const screenWidth = Dimensions.get('window').width;

         return (
             <SafeAreaView style={styles.safeArea}>

                 <View style={Styles.container}>
                     <StatusBar
                       translucent={true}
                       backgroundColor={'rgba(0, 0, 0, 0.3)'}
                     />
                     <Animated.View
        style={[
          Styles.header,
          {
            paddingHorizontal: screenWidth * 0.05,
            width: screenWidth,
            height: scrollOffset.interpolate({
              inputRange: [0, 200],
              outputRange: [120, 64],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <Animated.Text
          onLayout={e => {
            if (this.offset === 0 && this.state.titleWidth === 0) {
              const titleWidth = e.nativeEvent.layout.width;
              this.setState({ titleWidth });
            }
          }}
          style={{
            fontWeight: 'bold',
            fontSize: scrollOffset.interpolate({
              inputRange: [0, 200],
              outputRange: [26, 20],
              extrapolate: 'clamp',
            }),
          }}>
          Header Title Here
        </Animated.Text>
        <Animated.View
          style={{
            width: scrollOffset.interpolate({
              inputRange: [0, 200],
              outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
              extrapolate: 'clamp',
            }),
          }}
        />
      </Animated.View>
                     { this.gradient }
                     <ScrollView
                       style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}
                     >

                     <MapView
                             style={{ alignSelf: 'stretch', height: 200 }}
                             provider = { MapView.PROVIDER_GOOGLE }
                             customMapStyle = { generatedMapStyle }
                             ref={map => this.map = map}
                                   initialRegion={this.state.region}
                           >
                           {this.state.markers.map((marker, index) => {
                    const scaleStyle = {
                      transform: [
                        {
                          scale: interpolations[index].scale,
                        },
                      ],
                    };
                    const opacityStyle = {
                      opacity: interpolations[index].opacity,
                    };
                    return (
                      <MapView.Marker key={index} coordinate={marker.coordinate}>
                        <Animated.View style={[styles.markerWrap, opacityStyle]}>
                          <Animated.View style={[styles.ring, scaleStyle]} />
                          <MaterialCommunityIcons name="map-marker" size={30} color="black" />
                        </Animated.View>
                      </MapView.Marker>
                    );
                  })}
                           </MapView>
                     <Text style={styles.title1}>Categories</Text>

<ScrollView horizontal={true}>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<MaterialCommunityIcons name="school" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Education</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<MaterialCommunityIcons name="developer-board" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>IT</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<MaterialCommunityIcons name="lead-pencil" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Graphic Design</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<MaterialCommunityIcons name="heart-pulse" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Health and Fitness</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<Foundation name="torso-business" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Personal Development</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<FontAwesome name="language" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Languages</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<Foundation name="megaphone" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Marketing</Text>
</View>
<View style={{flexDirection:'column',margin:10,paddingHorizontal: 10,alignItems:'center'}}>
<FontAwesome name="camera" size={30} color="black" />

<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Photography</Text>
</View>
</ScrollView>
<Text style={styles.title1}>Near me</Text>

<Animated.ScrollView
         horizontal
         scrollEventThrottle={1}
         showsHorizontalScrollIndicator={false}
         snapToInterval={CARD_WIDTH}
         onScroll={Animated.event(
           [
             {
               nativeEvent: {
                 contentOffset: {
                   x: this.animation,
                 },
               },
             },
           ],
           { useNativeDriver: true }
         )}
         style={styles.scrollView}
         contentContainerStyle={styles.endPadding}
       >
         {this.state.markers.map((marker, index) => (
           <Card


           >
             <CardItem>

             <Left>
               <Thumbnail source={{uri: 'https://www.macupdate.com/images/icons256/59967.png'}} />
               <Body>
                 <Text>Opentiq</Text>
                 <Text note>Irbid/ 30 street</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem>
   <Body>
     <Text style={styles.info}><Text style={styles.boldd}>{marker.title} </Text>.</Text>
   </Body>
     </CardItem>
     <CardItem>
          <Body>
     <Text style={styles.info}>{marker.description}</Text>
   </Body>
   </CardItem>
   <CardItem>
        <Body>
     <Button onPress={() => {
       this.props.navigation.navigate('Reqpage')

     }} block style={{padding:20}}>
                <Text style={{color:'white'}}>Make Offer</Text>
              </Button>
            </Body>

            </CardItem>
           </Card>
         ))}
       </Animated.ScrollView>

<Text style={styles.title1}>Tutor</Text>
<Tutor   navigation={this.props.navigation}/>


<Text style={styles.title1}>Courses</Text>

<Lessons   navigation={this.props.navigation}/>

                     </ScrollView>
                 </View>

             </SafeAreaView>
         );
     }
 }
 const generatedMapStyle = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
