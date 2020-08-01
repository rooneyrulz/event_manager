import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => {
  return <Text style={styles.heading}>Event Manager</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
