import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import CustomButton from '../ui/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const NavigationButtons = ({userIndex, setUserIndex, totalUsers}) => {
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
        <CustomButton onPress={handlePrevious} title="Previous" />

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {userIndex + 1} / {totalUsers}
            </Text>
          </View>

          <CustomButton onPress={handleNext} title="Next" />
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
    shadowOffset: {width: 0, height: 2},
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
