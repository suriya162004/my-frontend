import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // center vertically
    alignItems: 'center',       // center horizontally
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;
