import React, { useState } from 'react';

// Context
import EventContext from '../contexts/EventContext';

const EventProvider = (props) => {
  const [events, setEvents] = useState([]);

  return (
    <EventContext.Provider value={{ events }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
