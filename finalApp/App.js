/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {Body} from 'native-base'
import firebase from 'firebase';
import 'firebase/firestore';
import Todo from './src/todo'

const firebaseConfig = {
  apiKey: "AIzaSyDRyKGbmXgJ2Ve47l0tK62Bbf1aXy8-lbI",
  authDomain: "ec500-todo.firebaseapp.com",
  databaseURL: "https://ec500-todo.firebaseio.com",
  projectId: "ec500-todo",
  storageBucket: "ec500-todo.appspot.com",
  messagingSenderId: "770955149240"
};

firebase.initializeApp(firebaseConfig);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      tasks: [],
      todoTitle: '',
      completed: false,
      addingNew: false,
    });
    this.ref = firebase.firestore().collection('todo');
  };

  componentDidMount() {
    this.ref.onSnapshot((querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({
            todoTitle: doc.data().todoTitle,
            completed: doc.data().completed,
            id: doc.id,
        });
      });
      this.setState({
        tasks: todos,
      });
    });
  }

  addTodo = () => {
    if(this.state.todoTitle){
      this.ref.add({
        todoTitle: this.state.todoTitle,
        completed: false,
      }).then((data) => {
        console.log('successful firebase add')
        this.setState({
          todoTitle: '',
          completed: false,
        });
      }).catch((error) => {
        console.log('error w firestone adding');
        this.setState({
          todoTitle: '',
          completed: false,
        });
      });
    }
  }

  deleteTodo = (key) => {
    this.ref.doc(this.state.tasks[key].id).delete();
  }

  completeTodo = (key) => {
    this.ref.doc(this.state.tasks[key].id).update({
      completed: !this.state.tasks[key].completed
    });
  }
  render() {
    let todos = this.state.tasks.map((val,key) => {
      return <Todo key={key} keyval={key} val = {val}
              delete={() => this.deleteTodo(key)} complete ={() => this.completeTodo(key)} />
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo List</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="What do you need to do?"
            onChangeText = {(updatedTodo) => this.setState({
              todoTitle: updatedTodo
            })}
            value = {this.state.todoTitle}
          >
          </TextInput>
          <TouchableOpacity
            style={styles.addButton}
            onPress = {
              this.addTodo.bind(this)
            }
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {todos}
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2f95dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    padding: 30,
    marginTop: 30,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  inputContainer: {
    padding:10,
    flexDirection: 'row',
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black', 
    padding: 20,
    flex: 4,
  },
  addButton: {
    flex: 2,
    height: 36,
    width: 20,
    flexDirection: 'row',
    backgroundColor: '#2f95dc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    flex: 1,
  },
  addButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

