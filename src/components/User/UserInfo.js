import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import UserInfoCard from './UserInfoCard';

const UserInformation = ({user}) => {
  return (
    <View style={styles.infoContainer}>
      <UserInfoCard label="ID" value={user.id} icon="fingerprint" />
      <UserInfoCard label="UID" value={user.uid} icon="account-box" />
      <UserInfoCard label="First Name" value={user.first_name} icon="person" />
      <UserInfoCard
        label="Last Name"
        value={user.last_name}
        icon="person-outline"
      />
      <UserInfoCard
        label="Username"
        value={user.username}
        icon="account-circle"
      />
      <UserInfoCard label="Email" value={user.email} icon="email" />
      <UserInfoCard label="Password" value={user.password} icon="lock" />
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: wp('4%'),
    margin: wp('3%'),
    height: hp('50%'),
    backgroundColor: '#FFFFFF',
    marginVertical: hp('3%'),
    borderRadius: wp('6%'),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
  },
});

export default UserInformation;
