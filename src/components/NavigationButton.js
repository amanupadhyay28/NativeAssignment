// src/components/NavigationButtons.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NavigationButtons = ({ onNext, onPrevious }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Previous" onPress={onPrevious} color="#6200EA" />
      <Button title="Next" onPress={onNext} color="#6200EA" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default NavigationButtons;
