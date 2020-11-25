import Carousel from 'react-native-snap-carousel';
import React from 'react';

export class MyCarousel extends React.Component {
  constructor(props)
  { super(props);
        this.state = {
        carouselItems: [ { title:"Item 1" },
        { title:"Item 2" }, 
        { title:"Item 3" },
        { title:"Item 4" }, 
        { title:"Item 5" } 
      ]
    } 
  }


    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>Hi</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this.carouselItems = c; }}
              renderItem={this._renderItem}
              sliderWidth={360}
              itemWidth={256}
            />
        );
    }
}