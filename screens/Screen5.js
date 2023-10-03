import React, { useState } from 'react';
import { View, Text, Switch,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [sliderValue, setSliderValue] = useState(50);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Switch</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Spinner (Course)</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="BSIT" value="option1" />
          <Picker.Item label="BSCS" value="option2" />
          <Picker.Item label="BSCRIM" value="option3" />
          <Picker.Item label="BSELEX" value="option3" />
          <Picker.Item label="BSELECT" value="option3" />
          <Picker.Item label="FPSM" value="option3" />
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Slider</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
        />
        <Text>{sliderValue.toFixed(0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
  },
  picker: {
    flex: 2,
    height: 40,
  },
  slider: {
    flex: 2,
  },
});

export default App;
