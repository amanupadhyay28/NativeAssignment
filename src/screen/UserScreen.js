import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View, Animated, Text, Platform } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import UserInformation from '../components/UserInfo';
import NavigationButtons from '../components/NavigationButton';
import { fetchUsers } from '../services/api';

const UserScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userIndex, setUserIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const fetchUserData = useCallback(async (index) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch users if not already fetched
      if (users.length === 0) {
        const response = await fetchUsers(80); // Adjust chunk size if necessary
        setUsers(response.data);
      }

      // Load user at the current index
      if (users[index]) {
        setUser(users[index]);
      }

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
  }, [users, fadeAnim]);

  useEffect(() => {
    fetchUserData(userIndex);
  }, [userIndex, fetchUserData]);

  const handleNext = () => {
    if (userIndex < users.length - 1) {
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
        <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} currentIndex={userIndex} totalUsers={users.length} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ProfileHeader user={user} />
        <UserInformation user={user} />
      </Animated.View>
      <NavigationButtons 
        onNext={handleNext} 
        onPrevious={handlePrevious} 
        currentIndex={userIndex} 
        totalUsers={users.length} 
      />
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
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
  },
});

export default UserScreen;
