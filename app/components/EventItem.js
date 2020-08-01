import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EventItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.eventItem}>
      <View style={styles.eventItemView}>
        <Text>{item.event}</Text>
        <Text>
          <MaterialIcons
            name='delete'
            size={28}
            onPress={(e) => Alert.alert('You wanna delete?')}
          />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: '#ccc',
  },
  eventItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EventItem;
