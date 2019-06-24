import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
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
            width: screenWidth / 2,
            height: screenHeight / 12,
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
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(255,0,0,0.6)'
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              ...StyleSheet.absoluteFillObject
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 1,
                textShadowColor: '#000'
              }}
            >
              {this.props.name.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
