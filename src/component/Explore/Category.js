import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class category extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          marginVertical: 10,
          marginRight: 10,
          shadowColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
          shadowOffset: {
            width: 1,
            height: 3
          },
          shadowOpacity: 0.6,
          shadowRadius: 5,

          elevation: 17
        }}
      >
        <View
          style={{
            width: screenWidth - 60,
            height: screenHeight / 4,
            borderWidth: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderColor: '#F44336',
            overflow: 'hidden'
          }}
        >
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
          />
        </View>
      </View>
    );
  }
}
