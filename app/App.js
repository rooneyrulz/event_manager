import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// LAYOUTS
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// COMPONENTS
import Events from './components/Events';
import NewEvent from './components/NewEvent';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.newEventContainer}>
        <NewEvent />
      </View>
      <View style={styles.eventContainer}>
        <Events />
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
