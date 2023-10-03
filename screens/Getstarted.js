import React, { useRef, useEffect, useContext, useState } from 'react';
import { Button, StyleSheet, View, Modal, TextInput, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Getstarted() {
   
  const navigation = useNavigation();
 
  const animation = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const showmodal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setInputText('');
  };

  const saveText = () => {
    hideModal();
    navigation.navigate('Home', { data: inputText });
  };

  useEffect(() => {
    // Your useEffect logic goes here if needed
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white',
          marginTop: 30,
        }}
        source={require('../assets/anim.json')}
      />
      <Text style={styles.text}>REACT NATIVE COMPONENTS</Text>
      <View style={styles.line}></View>
      <Text style={styles.caption}>
        React Native is a popular framework for building mobile applications using JavaScript and React. React Native
        provides a wide range of reusable components that you can use to create user interfaces for your mobile apps.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={showmodal}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Name"
              onChangeText={(text) => setInputText(text)} // Fix the input value
              value={inputText}
            />
            <View style={styles.modal}>
              <TouchableOpacity style={styles.modalButton} onPress={saveText}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={hideModal}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0b093a',
    marginTop: 20, // Adjust the marginTop
  },
  caption: {
    color: '#797979',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20, // Adjust the paddingHorizontal
    marginTop: 20, // Adjust the marginTop
  },
  line: {
    backgroundColor: '#0b093a',
    height: 3,
    width: 300,
    marginBottom: 20,
    marginTop: 5, 
  },
  button: {
    backgroundColor: '#0b093a',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30, // Adjust the marginTop
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#797979',
    borderWidth: 1,
    borderRadius: 5,
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons horizontally
  },
  modalButton: {
    backgroundColor: '#0b093a',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10, // Add margin to separate the buttons
  },
});
