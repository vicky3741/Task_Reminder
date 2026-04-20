import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../taskSlice';

/*
 * EXPERIMENT 8: Set up navigation... multiple screens.
 * This is the screen to add a task.
 * 
 * EXPERIMENT 10: Build a production ready app, debug and optimize.
 * Using KeyboardAvoidingView ensures the UI remains usable when the keyboard is open on mobile.
 */

const AddTaskScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.label}>What needs to be done?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title..."
          value={text}
          onChangeText={setText}
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Task" onPress={handleAdd} color="#4caf50" />
          <View style={{ width: 10 }} />
          <Button title="Cancel" onPress={() => navigation.goBack()} color="#f44336" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default AddTaskScreen;
