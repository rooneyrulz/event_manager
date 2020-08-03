import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// EVENT CONTEXT
import EventContext from '../contexts/EventContext';

// TYPES
import { REMOVE_EVENT } from '../config/types';

const EventItem = ({ item }) => {
  const { dispatch } = useContext(EventContext);

  return (
    <TouchableOpacity style={styles.eventItem}>
      <View style={styles.eventItemView}>
        <Text>{item.event}</Text>
        <Text
          onPress={(e) => dispatch({ type: REMOVE_EVENT, payload: item.id })}
        >
          <MaterialIcons name='delete' size={28} />
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
