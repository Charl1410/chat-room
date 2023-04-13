import { useState, useEffect } from 'react';
import React from 'react'

  const MessagesReceived = ({socket}) => {
    //setting messagesRecieved to an empty array in this state
    const[messagesRecieved, setMessagesRecieved] = useState([]);

    useEffect(() => {
        socket.on('receive_message', (data) => {
          console.log(data);
          setMessagesRecieved((state) => [
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
      <div className='border-indigo-500'>
        <p>hello</p>
      {messagesRecieved.map((msg, i) => (
        <div className='' key={i}>
          <div>
            <span className='text-black'>{msg.username}</span>
            <span className=''>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className=''>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  )
}


export default MessagesReceived
