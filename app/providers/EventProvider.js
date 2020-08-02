import React, { useState } from 'react';
import { v4 } from 'uuid';

// CONTEXT
import EventContext from '../contexts/EventContext';

const EventProvider = (props) => {
  const [events, setEvents] = useState([
    { id: v4(), event: 'Buy a coffee' },
    { id: v4(), event: 'Do shopping' },
    { id: v4(), event: 'Take a nap' },
    { id: v4(), event: 'Play football' },
    { id: v4(), event: 'Order a piece of burgar' },
  ]);

  const onAddEvent = (event) => setEvents((prev) => [event, ...prev]);

  const onDeleteEvent = (id) =>
    setEvents((prev) => prev.filter((event) => event.id !== id));

  return (
    <EventContext.Provider value={{ events, onAddEvent, onDeleteEvent }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
