import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import EventItem from './EventItem';

const Events = () => {
  const [event, setEvent] = useState([
    'Buy a coffee',
    'Do shopping',
    'Play football',
    'Take a nap',
    'Taste a burgar',
    'Create some poems',
    'Buy a coffee',
    'Do shopping',
    'Play football',
    'Take a nap',
    'Taste a burgar',
    'Create some poems',
  ]);

  const eventList = event.map((ev) => <EventItem event={ev} />);
  return (
    <ScrollView>
      <View style={styles.eventContainer}>{eventList}</View>;
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContainer: {},
});

export default Events;
