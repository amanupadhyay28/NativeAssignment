// src/components/UserCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.text}>ID: {user.id}</Text>
      <Text style={styles.text}>UID: {user.uid}</Text>
      <Text style={styles.text}>Name: {user.first_name} {user.last_name}</Text>
      <Text style={styles.text}>Username: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Password: {user.password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#EDE7F6', // Light purple shade
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#4A148C', // Dark purple shade
    marginBottom: 5,
  },
});

export default UserCard;
