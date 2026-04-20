import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../counterSlice';

/*
 * EXPERIMENT 7: Manage application state using redux.
 * This component uses `useSelector` to read from the Redux store,
 * and `useDispatch` to update the store using the `increment` and `decrement` actions.
 */

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.countText} testID="count-label">Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Increment" 
          onPress={() => dispatch(increment())} 
          testID="increment-btn"
        />
        <Button 
          title="Decrement" 
          color="red"
          onPress={() => dispatch(decrement())} 
          testID="decrement-btn"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  }
});

export default Counter;
