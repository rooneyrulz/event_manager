import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import EventItem from './EventItem';

const Events = ({ events }) => {
  return (
    <View style={styles.eventContainer}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={events}
        renderItem={({ item }) => <EventItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {},
});

export default Events;
