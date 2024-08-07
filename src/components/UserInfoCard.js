import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserInfoCard = ({label, value, icon}) => {
  return (
    <View style={styles.infoRow}>
      <Icon name={icon} size={24} color="#6200EA" />
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
    marginBottom: 15,
  },
  infoLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#6200EA',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#555',
    flex: 2,
  },
});
