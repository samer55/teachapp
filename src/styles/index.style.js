import { StyleSheet ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#ededed',
    background2: '#ffffff'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    recentlyPlayedTitleBar: {
  paddingHorizontal: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
},

 endPadding: {
   paddingRight: width - CARD_WIDTH,
 },

 markerWrap: {
   alignItems: "center",
   justifyContent: "center",
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
   color:'#2196f3'
 },
 boldd: {
   fontWeight: 'bold',
   fontSize:20

 },
 marker: {
   width: 10,
   height: 10,
   borderRadius: 4,
   backgroundColor: "rgba(130,4,150, 0.9)",
 },
 ring: {
   width: 24,
   height: 24,
   borderRadius: 12,
   backgroundColor: "transparent",
   position: "absolute",
   borderWidth: 1,
   borderColor: "rgba(130,4,150, 0.5)",
 },
TextInputStyleClass:{

textAlign: 'center',
height: 40,
borderWidth: 1,
borderColor: 'grey',
borderRadius: 20 ,
backgroundColor : "#fff"

},
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',

    },
    title1: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        color: 'black',
        margin:10,
        fontSize: 25,
        fontWeight: 'bold',

    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'grey',
        fontSize: 13,
        fontStyle: 'italic',
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});
