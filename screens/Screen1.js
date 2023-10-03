import React , {useState}from 'react';
import { View, Text, Alert, Modal, StyleSheet,Button, SafeAreaView, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Screen1({ route }) {
  const receivedData = route.params?.data;
  const [modalVisible, setModalVisible] = useState(false);
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `Hello ${receivedData}`,
      text2: 'Welcome To React Native',
      position: 'bottom',
    });
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const showAlert = () => {
    Alert.alert(
      `Hello ${receivedData}`,
      'Welcome To React Native',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Hello {receivedData}</Text>
              <Button title='Close' onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      <Button title='Show Alert' onPress={showAlert} />
      <Button title='Show PopUp' onPress={toggleModal} />
        <Button title='Show toast' onPress={showToast} />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
