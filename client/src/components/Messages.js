import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import React from 'react'

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

  
  
    return (
      <div className={styles.messagesColumn}>
      {messagesRecieved.map((msg, i) => (
        <div className={styles.message} key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={styles.msgMeta}>{msg.username}</span>
            <span className={styles.msgMeta}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className={styles.msgText}>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  )
}


export default Messages
