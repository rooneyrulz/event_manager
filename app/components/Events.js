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
  const [event, setEvent] = useState([]);

  return (
    <ScrollView>
      <View style={styles.eventContainer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContainer: {},
});

export default Events;
