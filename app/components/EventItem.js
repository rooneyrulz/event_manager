import React from 'react';
import { StyleSheet, Text } from 'react-native';

const EventItem = ({ event }) => {
  return <Text style={styles.eventItem}>{event}</Text>;
};

const styles = StyleSheet.create({
  eventItem: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: '#ccc',
  },
});

export default EventItem;
