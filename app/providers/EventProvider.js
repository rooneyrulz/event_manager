import React, { useState, useReducer } from 'react';
import { v4 } from 'uuid';

// CONTEXT
import EventContext from '../contexts/EventContext';

// REDUCER
import EventReducer from '../reducers/EventReducer';

const EventProvider = (props) => {
  const [events, dispatch] = useReducer(EventReducer, [
    { id: v4(), event: 'Buy a coffee' },
    { id: v4(), event: 'Take a nap' },
    { id: v4(), event: 'Play football' },
    { id: v4(), event: 'Order a piece of burgar' },
  ]);

  return (
    <EventContext.Provider value={{ events, dispatch }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
