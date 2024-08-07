import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const NavigationButtons = ({ userIndex, setUserIndex, totalUsers }) => {

  const handleNext = () => {
    if (userIndex < totalUsers - 1) {
      setUserIndex(userIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (userIndex > 0) {
      setUserIndex(userIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.curvedBackground}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {userIndex + 1} / {totalUsers}
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
       
     
        zIndex: 1000,
    },
    curvedBackground: {
      width: '100%',
      padding: wp('5%'),
      backgroundColor: Platform.OS === 'ios' ? '#F5F5F5' : '#FFFFFF',
      borderTopLeftRadius: hp('5%'),
      borderTopRightRadius: hp('5%'),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
      overflow: 'hidden',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
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
      fontWeight: 'bold',
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
    },
    infoContainer: {
      flex: 1,
      alignItems: 'center',
    },
    infoText: {
      fontSize: wp('4%'),
      color: '#6200EA',
      fontWeight: 'bold',
    },
  });
  
export default NavigationButtons;
