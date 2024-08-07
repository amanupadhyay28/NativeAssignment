import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserInfo = ({label, value, icon}) => {
  return (
    <View style={styles.infoRow}>
      <Icon name={icon} size={24} color="#6200EA" />
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};

const UserInformation = ({user}) => {
  return (
    <View style={styles.infoContainer}>
      <UserInfo label="ID" value={user.id} icon="fingerprint" />
      <UserInfo label="UID" value={user.uid} icon="account-box" />
      <UserInfo label="First Name" value={user.first_name} icon="person" />
      <UserInfo
        label="Last Name"
        value={user.last_name}
        icon="person-outline"
      />
      <UserInfo label="Username" value={user.username} icon="account-circle" />
      <UserInfo label="Email" value={user.email} icon="email" />
      <UserInfo label="Password" value={user.password} icon="lock" />
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#6200EA',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#555',
    flex: 2,
  },
});

export default UserInformation;
