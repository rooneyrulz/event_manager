import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NewEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.newEvent}
        onPress={(e) => setIsOpen((prev) => true)}
      >
        <MaterialIcons style={styles.newEventIcon} name='add' size={30} />
        <Text style={styles.newEventText}>New Event</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={(e) => Keyboard.dismiss()}>
        <Modal visible={isOpen} animationType='slide'>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={(e) => setIsOpen((prev) => false)}
            >
              <MaterialIcons name='close' size={40} />
            </TouchableOpacity>
            <View style={styles.modalEvent}>
              <TextInput
                style={styles.modalTextInput}
                placeholder='New Event..'
              />
              <TouchableOpacity style={styles.modalsave}>
                <MaterialIcons
                  style={styles.modalSaveIcon}
                  name='cloud'
                  size={30}
                />
                <Text style={styles.modalSaveText}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalFooter}></View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  newEvent: {
    backgroundColor: 'darkslateblue',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newEventIcon: {
    color: '#fff',
  },
  newEventText: {
    fontSize: 18,
    color: '#fff',
  },
  modalContent: {
    flex: 1,
  },
  modalClose: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalEvent: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTextInput: {
    width: '80%',
    borderBottomWidth: 2,
    fontSize: 20,
    marginBottom: 20,
  },
  modalsave: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'darkslateblue',
  },
  modalSaveIcon: {
    color: '#fff',
    paddingRight: 10,
  },
  modalSaveText: {
    fontSize: 18,
    color: '#fff',
  },
  modalFooter: {
    flex: 1,
  },
});

export default NewEvent;
