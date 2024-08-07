// src/components/InformationCard.js

import React from 'react';
import {View, Text, StyleSheet, Icon} from 'react-native';
import {MaterialIcons} from 'react-native-vector-icons';

const InformationCard = ({title, value, icon}) => {
  if (!title || !value) {
    console.error('Title or value is missing!');
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        {icon && <Icon name={icon} size={24} color="#4F8EF7" />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InformationCard;
