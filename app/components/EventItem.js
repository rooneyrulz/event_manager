import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// EVENT CONTEXT
import EventContext from '../contexts/EventContext';

// TYPES
import { REMOVE_EVENT } from '../config/types';

// COLORS
import { secondaryColor, textColor } from '../config/colors';

const EventItem = ({ item }) => {
  const { dispatch } = useContext(EventContext);

  return (
    <TouchableOpacity style={styles.eventItem}>
      <View style={styles.eventItemView}>
        <Text style={styles.eventItemText}>{item.event}</Text>
        <Text
          onPress={(e) => dispatch({ type: REMOVE_EVENT, payload: item.id })}
        >
          <MaterialIcons name='delete' size={28} style={styles.eventItemIcon} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: secondaryColor,
  },
  eventItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventItemText: {
    color: textColor,
    fontSize: 18,
  },
  eventItemIcon: {
    color: textColor,
  },
});

export default EventItem;
