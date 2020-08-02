import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { v4 } from 'uuid';

// LAYOUTS
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// COMPONENTS
import Events from './components/Events';
import NewEvent from './components/NewEvent';

const App = () => {
  const [events, setEvents] = useState([
    { id: v4(), event: 'Buy a coffee' },
    { id: v4(), event: 'Do shopping' },
    { id: v4(), event: 'Take a nap' },
    { id: v4(), event: 'Play football' },
    { id: v4(), event: 'Order a piece of burgar' },
  ]);

  const onDeleteEvent = (id) =>
    setEvents((prev) => prev.filter((event) => event.id !== id));

  const onAddEvent = (event) => setEvents((prev) => [event, ...prev]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.newEventContainer}>
        <NewEvent onAddEvent={onAddEvent} />
      </View>
      <View style={styles.eventContainer}>
        {events.length ? (
          <Events events={events} onDeleteEvent={onDeleteEvent} />
        ) : (
          <Text style={{ textAlign: 'center' }}>No events yet...!</Text>
        )}
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
    marginTop: 25,
    backgroundColor: 'darkslateblue',
  },
  newEventContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  eventContainer: {
    flex: 6,
    // alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop: 25,
    backgroundColor: 'darkslateblue',
  },
});

export default App;
