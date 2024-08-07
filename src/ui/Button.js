// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EA',
    borderRadius: wp('5%'),
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp('4%'),
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Quicksand-Bold',
  },
});

export default CustomButton;
