// src/components/UserInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserInfo = ({ label, value, icon }) => {
  return (
    <View style={styles.infoRow}>
      <Icon name={icon} size={24} color="#6200EA" />
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};

const UserInformation = ({ user }) => {
  return (
    <View style={styles.infoContainer}>
      <UserInfo label="ID" value={user.id} icon="fingerprint" />
      <UserInfo label="UID" value={user.uid} icon="account-circle" />
      <UserInfo label="Password" value={user.password} icon="vpn-key" />
      <UserInfo label="Email" value={user.email} icon="email" />
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
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
    color: '#333',
  },
  infoValue: {
    marginLeft: 5,
    fontSize: 16,
    color: '#555',
  },
});

export default UserInformation;
