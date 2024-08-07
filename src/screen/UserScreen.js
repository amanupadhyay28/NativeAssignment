// src/screens/UserScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View, Animated, Text } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import UserInformation from '../components/UserInfo';
import NavigationButtons from '../components/NavigationButton';
import { fetchUsers } from '../services/api';

const UserScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userIndex, setUserIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  const fetchUserData = async (index) => {
    try {
      setLoading(true);
      setError(null); 
      const response = await fetchUsers(80);
      setUser(response.data[index]);
      setLoading(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } catch (err) {
      setLoading(false);
      setError('Failed to load user data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchUserData(userIndex);
  }, [userIndex]);

  const handleNext = () => {
    if (userIndex < 79) {
      setUserIndex(userIndex + 1);
      fadeAnim.setValue(0);
    }
  };

  const handlePrevious = () => {
    if (userIndex > 0) {
      setUserIndex(userIndex - 1);
      fadeAnim.setValue(0);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EA" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ProfileHeader user={user} />
        <UserInformation user={user} />
      </Animated.View>
      <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#D32F2F',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default UserScreen;
