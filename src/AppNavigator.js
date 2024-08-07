// src/AppNavigator.js
import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../src/screen/UserScreen';
import NavigationButtons from '../src/components/NavigationButton'; // Adjust the import path as needed

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
