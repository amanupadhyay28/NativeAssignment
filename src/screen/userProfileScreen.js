// src/screens/UserProfileScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import InformationCard from '../components/InformationCard';

const UserProfileScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://random-data-api.com/api/users/random_user?size=80');
            const text = await response.text();
            console.log('Raw Response:', text);
            const data = JSON.parse(text);  // Parse JSON manually
            setUsers(data);
            setLoading(false);
          } catch (error) {
            console.error('Parsing or Fetch Error:', error.message);
            Alert.alert('Error', `Failed to fetch or parse user data: ${error.message}`);
            setLoading(false);
          }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#7F3DFF" style={styles.loader} />;
  }

  if (users.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No user data available. Please try again later.</Text>
      </View>
    );
  }

  const user = users[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.detail}>UID: {user.uid}</Text>
        <Text style={styles.detail}>DOB: {new Date(user.date_of_birth).toLocaleDateString()}</Text>
        <Text style={styles.detail}>Gender: {user.gender}</Text>
      </View>
      <View style={styles.cardContainer}>
        <InformationCard icon="account-circle" label="Username" value={user.username} />
        <InformationCard icon="lock" label="Password" value={user.password} />
        <InformationCard icon="work" label="Job Title" value={user.employment.title} />
        <InformationCard icon="build" label="Key Skill" value={user.employment.key_skill} />
        <InformationCard icon="location-on" label="Address" value={`${user.address.street_address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`} />
        <InformationCard icon="phone" label="Phone" value={user.phone_number} />
        <InformationCard icon="email" label="Email" value={user.email} />
        <InformationCard icon="credit-card" label="Credit Card" value={`**** **** **** ${user.credit_card.cc_number.slice(-4)}`} />
        <InformationCard icon="subscriptions" label="Subscription Plan" value={`${user.subscription.plan} (${user.subscription.status})`} />
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
          <Text style={styles.navText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Text style={styles.navText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f2ff',
    padding: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0d4f7',
    borderRadius: 15,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3e3e3e',
  },
  detail: {
    fontSize: 18,
    color: '#6e6e6e',
    marginTop: 5,
  },
  cardContainer: {
    marginTop: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#7F3DFF',
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfileScreen;
