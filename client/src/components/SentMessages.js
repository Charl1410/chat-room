import styles from './styles.module.css';
import { useState, useEffect } from 'react';

import React from 'react'

function SentMessages() {
  const Messages = ({socket}) => {
    //setting messagesRecieved to an empty array in this state
    const[messagesRecieved, setMessagesRecieved] = useState([]);

    useEffect(() => {
        socket.on('receive_message', (data) => {
          console.log(data);
          setMessagesReceived((state) => [
            ...state,
            {
              message: data.message,
              username: data.username,
              __createdtime__: data.__createdtime__,
            },
          ]);
        });
    
        // dunno 
        return () => socket.off('receive_message');
      }, [socket]);

    //function to format the date 
      const formatDateFromTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString()
    }

  }
  
    return (
    <div className="w-96 h-96 border-indigo-500">
        
    </div>
  )
}

export default SentMessages
