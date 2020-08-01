import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Footer = () => {
  return <Text style={styles.footerText}>Event Manager &copy; In 2020</Text>;
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Footer;
