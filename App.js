import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

function App() {

  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Counter App</Text>
        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    borderRadius: 4,
  },
});
