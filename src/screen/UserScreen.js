import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View, Text, Platform } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import UserInformation from '../components/UserInfo';
import NavigationButtons from '../components/NavigationButton';
import { fetchUsers } from '../services/fetchUser';

const UserScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userIndex, setUserIndex] = useState(0);
  const [users, setUsers] = useState([]);
  
  const fetchUserData = useCallback(async (index) => {
    try {
      setLoading(true);
      setError(null);

    
      if (users.length === 0) {
        const response = await fetchUsers(80);
        setUsers(response.data);
      }

     
      if (users[index]) {
        setUser(users[index]);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Failed to load user data. Please try again later.');
    }
  }, [users]);

  useEffect(() => {
    fetchUserData(userIndex);
  }, [userIndex, fetchUserData]);

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
        <NavigationButtons 
          userIndex={userIndex}
          setUserIndex={setUserIndex}
          totalUsers={users.length}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <>
        <ProfileHeader user={user} />
        <UserInformation user={user} />
      </>
      <NavigationButtons 
        userIndex={userIndex}
        setUserIndex={setUserIndex}
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
