import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

const NavigationButtons = ({onNext, onPrevious}) => {
  return (
    <View style={styles.container}>
      <View style={styles.curvedBackground}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop:40,
  },
  curvedBackground: {
    width: '100%',
    padding: 20,
    backgroundColor: Platform.OS === 'ios' ? '#F5F5F5' : '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#6200EA',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
  },
});

export default NavigationButtons;
