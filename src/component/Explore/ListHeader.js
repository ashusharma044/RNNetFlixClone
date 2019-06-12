import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class category extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15
          }}
        >
          {this.props.name}
        </Text>
        <Icon.Button
          name='arrow-right'
          backgroundColor='rgba(52, 52, 52, 0)'
          color='#000'
          onPress={() => alert('Go To Next!')}
        />
      </View>
    );
  }
}
