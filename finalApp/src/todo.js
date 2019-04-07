/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Body, CheckBox, Icon} from 'native-base'

export default class Todo extends Component<Props> {
  render() {
    return (
      <View style={styles.todoItem} key={this.props.keyval}>
      <View style={styles.innerStyle}>
        <CheckBox 
          checked = {this.props.val.completed} 
          onPress = {this.props.complete}
        />
        <Body style={styles.todoBody}>
          <Text
            style={{
              'textDecorationLine': this.props.val.completed ? 'line-through' : 'none',
              color: this.props.val.completed ? 'grey' : 'black'
            }}
          >{this.props.val.todoTitle}</Text>
        </Body>
        <TouchableOpacity 
          style={styles.todoDelete}
          onPress = {this.props.delete}>
          <Icon 
            style = {{
              color: this.props.val.completed ? 'grey' : 'black',
              fontSize: 18,
            }}
            type="FontAwesome" name="trash" />
          </TouchableOpacity>
      </View>    
      </View >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoItem: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    },
    innerStyle: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
      paddingVertical: 5,
    },
    todoBody: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 25,
    },
    todoDelete:{
      paddingLeft: 25, 
      paddingRight: 15,
    }
})

