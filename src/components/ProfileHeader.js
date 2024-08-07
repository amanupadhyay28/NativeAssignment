// src/components/ProfileHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const ProfileHeader = ({ user }) => {
  const { width } = Dimensions.get('window');
  
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarWrapper}>
        <Image 
          source={{ uri: user.avatar }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.fullName}>{user.first_name} {user.last_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6200EA',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userInfo: {
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  fullName: {
    fontSize: 18,
    color: '#FFF',
    opacity: 0.8,
  },
});

export default ProfileHeader;
