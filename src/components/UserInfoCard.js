import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const UserInfoCard = ({label, value, icon}) => {
  return (
    <View style={styles.infoRow}>
      <Icon name={icon} size={wp('5%')}color="#6200EA" />
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};
export default UserInfoCard;

const styles = StyleSheet.create({
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp('3.5%'),
     
    },
    infoLabel: {
      marginLeft: wp('3%'),
      fontSize: wp('4%'),
      fontWeight: '500',
      color: '#6200EA',
      flex: 1,
    },
    infoValue: {
      fontSize: wp('4%'),
      color: '#555',
      flex: 2,
    },
  });
