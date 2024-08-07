// src/components/ProfileHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = ({ user }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.fullName}>{user.first_name} {user.last_name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#F5F5F5',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#6200EA',
    marginBottom: 15,
  },
  fullName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  username: {
    fontSize: 16,
    color: '#777',
  },
});

export default ProfileHeader;
