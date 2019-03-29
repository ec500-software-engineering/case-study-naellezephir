/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      currentColor: '#fff'
    }
  }

  changeCurrentColor = () =>{
    console.log("button pressed");
    var newColor = 'rgb(' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256))+ ')';
    console.log(newColor)
    this.setState({
      currentColor: newColor
    })
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.currentColor}]}>
        <TouchableOpacity
          title= "Click me to change background color"
          onPress = {this.changeCurrentColor} 
          style={styles.button}>
            <Text style={styles.buttonText}> Click Me to Change the Background Color </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 300,
    color: 'black',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    paddingTop: 15
  }
});

