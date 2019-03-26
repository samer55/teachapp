import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    },

  wrapper: {
  },
}

export default class Slide extends Component {
    constructor(props){
        super(props)

        this.state = {
           width: '100%',
            imagesSlider: [

              { uri:'https://static1.squarespace.com/static/596fb8f0bf629ac1c8f75c1a/t/5a4fac1724a6948ca5cb4155/1515170853755/Tutor+and+Student-1b.jpg' },
                  { uri:'https://study.com/cimages/multimages/16/adobestock_80501595.png' },
{ uri:'https://i.pinimg.com/564x/a5/e9/8e/a5e98e7736dca698cf4e347ee8f46b2a.jpg' },
            ]
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                width: '100%'
            });
        });
    }
    render(){
        return (
          <View style={{borderRadius:20,marginBottom:5}} >

            <Swiper  height={200} horizontal={true} width={this.state.width} autoplay >

            {
              this.state.imagesSlider.map((item, i) => <Slider
                uri={item}
                key={i}
                                                       />)
                }

                </Swiper>
            </View>
        )
    }
}
