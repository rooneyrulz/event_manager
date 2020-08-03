import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

// COMPONENTS
import EventItem from './EventItem';

// EVENT CONTEXT
import EventContext from '../contexts/EventContext';

// COLORS
import { textColor } from '../config/colors';

const Events = () => {
  const { events } = useContext(EventContext);

  return (
    <View style={styles.eventContainer}>
      {events.length ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={events}
          renderItem={({ item }) => <EventItem item={item} />}
        />
      ) : (
        <Text style={styles.notFoundText}>No events added yet...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {},
  notFoundText: {
    textAlign: 'center',
    color: textColor,
    fontSize: 18,
  },
});

export default Events;
