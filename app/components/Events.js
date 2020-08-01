import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import EventItem from './EventItem';

const Events = ({ events, onDeleteEvent }) => {
  return (
    <View style={styles.eventContainer}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={events}
        renderItem={({ item }) => (
          <EventItem item={item} onDeleteEvent={onDeleteEvent} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {},
});

export default Events;
