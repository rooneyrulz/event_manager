import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NewEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button
        title='New Event'
        color='darkslateblue'
        onPress={(e) => setIsOpen((prev) => true)}
      />
      <Modal visible={isOpen} animationType='slide'>
        <View>
          <Text>
            <MaterialIcons
              name='close'
              size={30}
              onPress={(e) => setIsOpen((prev) => false)}
            />
          </Text>
          <Text>Hello...!</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewEvent;
