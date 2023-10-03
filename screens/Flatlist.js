import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  
  const data = [
    { id: '1', text: 'Hershiel Jay Juntilla' },
    { id: '2', text: 'Arnel Pajota' },
    { id: '3', text: 'Kenneth Tadlas' },
    { id: '4', text: 'Jesriel Linog' },
    { id: '5', text: 'Angelo Maldora' },
    { id: '6', text: 'Marlon Carbonilla' },
    
  ];

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List Of Boarders</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#0b093a',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
   
  },
  text:{
    color: 'white'
  }
});

export default App;
