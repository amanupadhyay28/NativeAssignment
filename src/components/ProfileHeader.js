import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  
  Platform,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ProfileHeader = ({user}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{uri: user.avatar}}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.fullName}>
          {user.first_name} {user.last_name}
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#6200EA',
      borderBottomLeftRadius: hp('7%'),
      borderBottomRightRadius: hp('7%'),
      alignItems: 'center',
      paddingVertical: hp('5%'),
      paddingHorizontal: wp('5%'),
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 15,
        },
        android: {
          elevation: 10,
        },
      }),
    },
    avatarWrapper: {
      width: wp('30%'),
      height: wp('30%'),
      borderRadius: wp('15%'),
      overflow: 'hidden',
      borderWidth: wp('1%'),
      borderColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 10,
      marginBottom: hp('2%'),
    },
    avatar: {
      width: '100%',
      height: '100%',
    },
    userInfo: {
      alignItems: 'center',
    },
    username: {
      fontSize: wp('6%'),
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom: hp('1%'),
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Quicksand-Medium',
    },
    fullName: {
      fontSize: wp('4.5%'),
      color: '#FFF',
      opacity: 0.8,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Quicksand-Semibold',
    },
  });
export default ProfileHeader;
