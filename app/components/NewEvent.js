import React, { useState, useContext } from 'react';
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
import { v4 } from 'uuid';

// EVENT CONTEXT
import EventContext from '../contexts/EventContext';

// TYPES
import { ADD_EVENT } from '../config/types';

// COLORS
import {
  textColor,
  primaryColor,
  bgColor,
  secondaryColor,
} from '../config/colors';

const NewEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEvent, setUserEvent] = useState({ id: null, event: null });
  const { dispatch } = useContext(EventContext);

  const onEventSave = (e) => {
    dispatch({ type: ADD_EVENT, payload: userEvent });
    setIsOpen((prev) => false);
  };

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
              <MaterialIcons
                name='close'
                size={40}
                style={styles.modalCloseIcon}
              />
            </TouchableOpacity>
            <View style={styles.modalEvent}>
              <TextInput
                style={styles.modalTextInput}
                placeholder='New Event..'
                onChangeText={(val) =>
                  setUserEvent({ ...userEvent, id: v4(), event: val })
                }
              />
              <TouchableOpacity
                style={styles.modalsave}
                onPress={(e) => onEventSave(e)}
              >
                <MaterialIcons
                  style={styles.modalSaveIcon}
                  name='cloud'
                  size={30}
                />
                <Text style={styles.modalSaveText}>Add To List</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalFooter}>
              <Text style={styles.modalFooterText}>Event Manager</Text>
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  newEvent: {
    backgroundColor: textColor,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newEventIcon: {
    color: primaryColor,
  },
  newEventText: {
    fontSize: 18,
    color: primaryColor,
  },
  modalContent: {
    flex: 1,
    backgroundColor: bgColor,
  },
  modalClose: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseIcon: {
    color: textColor,
  },
  modalEvent: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTextInput: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: textColor,
    backgroundColor: secondaryColor,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 22,
    marginBottom: 20,
    color: textColor,
  },
  modalsave: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: textColor,
  },
  modalSaveIcon: {
    color: primaryColor,
    paddingRight: 10,
  },
  modalSaveText: {
    fontSize: 18,
    color: primaryColor,
  },
  modalFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooterText: {
    color: textColor,
  },
});

export default NewEvent;
