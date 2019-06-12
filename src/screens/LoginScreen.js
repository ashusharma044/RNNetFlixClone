import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  TextInputProps,
  StyleSheet,
  Dimensions
} from 'react-native';
import * as images from '../assets/images';
const { width, height } = Dimensions.get('window');
import Slideshow from 'react-native-image-slider-show';
import Category from '../component/Explore/Category';
import SmallBanner from '../component/Explore/SmallBanner';
import Listing from '../component/Explore/Listing';
import ListHeader from '../component/Explore/ListHeader';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  _handleEmailChange = email => {};
  _handlePasswordChange = password => {};
  onPressLogin = () => {};
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.mainWrapper}
          showsHorizontalScrollIndicator={false}
        >
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around'
            }}
          >
            <Category imageUri={images.img.slider1} />
            <Category imageUri={images.img.slider2} />
            <Category imageUri={images.img.slider3} />
          </ScrollView>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around'
            }}
          >
            <SmallBanner imageUri={images.img.slider1} name='Dicover' />
            <SmallBanner imageUri={images.img.slider2} name='Bird Box' />
            <SmallBanner imageUri={images.img.slider3} name='Revange' />
          </ScrollView>
          <View
            style={{
              marginTop: 20
            }}
          >
            <ListHeader name='My List' />
            <ScrollView
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-around'
              }}
            >
              <Listing imageUri={images.img.listOp1} />
              <Listing imageUri={images.img.listOp2} />
              <Listing imageUri={images.img.listOp3} />
              <Listing imageUri={images.img.listOp4} />
              <Listing imageUri={images.img.listOp5} />
              <Listing imageUri={images.img.listOp6} />
              <Listing imageUri={images.img.listOp7} />
              <Listing imageUri={images.img.listOp8} />
              <Listing imageUri={images.img.listOp9} />
              <Listing imageUri={images.img.listOp10} />
              <Listing imageUri={images.img.listOp11} />
              <Listing imageUri={images.img.listOp12} />
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 20
            }}
          >
            <ListHeader name='Popular On Netflix' />
            <ScrollView
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-around'
              }}
            >
              <Listing imageUri={images.img.listOp11} />
              <Listing imageUri={images.img.listOp12} />
              <Listing imageUri={images.img.listOp10} />
              <Listing imageUri={images.img.listOp9} />
              <Listing imageUri={images.img.listOp8} />
              <Listing imageUri={images.img.listOp7} />
              <Listing imageUri={images.img.listOp6} />
              <Listing imageUri={images.img.listOp5} />
              <Listing imageUri={images.img.listOp4} />
              <Listing imageUri={images.img.listOp3} />
              <Listing imageUri={images.img.listOp2} />
              <Listing imageUri={images.img.listOp1} />
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 20
            }}
          >
            <ListHeader name='New Arrival' />
            <ScrollView
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-around'
              }}
            >
              <Listing imageUri={images.img.listOp7} />
              <Listing imageUri={images.img.listOp8} />
              <Listing imageUri={images.img.listOp9} />
              <Listing imageUri={images.img.listOp10} />
              <Listing imageUri={images.img.listOp11} />
              <Listing imageUri={images.img.listOp12} />
              <Listing imageUri={images.img.listOp1} />
              <Listing imageUri={images.img.listOp2} />
              <Listing imageUri={images.img.listOp3} />
              <Listing imageUri={images.img.listOp4} />
              <Listing imageUri={images.img.listOp5} />
              <Listing imageUri={images.img.listOp6} />
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 20
            }}
          >
            <ListHeader name='Watch List' />
            <ScrollView
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-around'
              }}
            >
              <Listing imageUri={images.img.listOp6} />
              <Listing imageUri={images.img.listOp5} />
              <Listing imageUri={images.img.listOp4} />
              <Listing imageUri={images.img.listOp3} />
              <Listing imageUri={images.img.listOp2} />
              <Listing imageUri={images.img.listOp1} />
              <Listing imageUri={images.img.listOp11} />
              <Listing imageUri={images.img.listOp12} />
              <Listing imageUri={images.img.listOp10} />
              <Listing imageUri={images.img.listOp9} />
              <Listing imageUri={images.img.listOp8} />
              <Listing imageUri={images.img.listOp7} />
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.secondWrapper} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    //padding: 20
  },
  mainWrapper: {},
  secondWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
