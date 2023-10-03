import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  StyleSheet,
} from 'react-native';

const MyTouchables = () => {
  const onPressHandler = () => {
   
  };

  return (
    <View style={styles.container}>
     
      <TouchableHighlight
        onPress={onPressHandler}
        style={styles.touchableHighlight}
        underlayColor="#DDDDDD"
      >
        <View>
          <Text style={styles.text}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

     
      <TouchableOpacity onPress={onPressHandler} style={styles.touchableOpacity}>
        <View>
          <Text style={styles.text}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

     
      <TouchableWithoutFeedback onPress={onPressHandler} >
        <View  style={styles.touchableOpacity}>
          <Text style={styles.text}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableHighlight: {
    backgroundColor: '#0b093a',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  touchableOpacity: {
    backgroundColor: '#0b093a',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyTouchables;
