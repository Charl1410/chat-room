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
      <div className='h-96 p-10 border border-sky-500'>
        <div></div>
      {messagesRecieved.map((msg, i) => (
        //for each message generating this html 
        <div className='bg-grey mb-10 border border-sky-500' key={i}>
          <div>
            <span className='text-black'>{msg.username}</span>
            <span className='text-black-50'>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className='text-black-50'>{msg.message}</p>
          <br />
        </div>
        //to here
      ))}
    </div>
  )
}


export default MessagesReceived
