import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';

// LAYOUTS
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// COMPONENTS
import Events from './components/Events';
import NewEvent from './components/NewEvent';

// CONTEXT PROVIDERS
import EventProvider from './providers/EventProvider';

// COLORS
import { bgColor, primaryColor, secondaryColor } from './config/colors';

const App = () => {
  return (
    <EventProvider>
      {Platform.OS === 'ios' ? (
        <SafeAreaView>
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
            <ExpoStatusBar style='auto' />
          </View>
        </SafeAreaView>
      ) : (
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
          <ExpoStatusBar style='auto' />
        </View>
      )}
    </EventProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: secondaryColor,
  },
  newEventContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  eventContainer: {
    flex: 6,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: primaryColor,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: secondaryColor,
  },
});

export default App;
