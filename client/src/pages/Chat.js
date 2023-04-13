//here we are importing the array of messages from the component 
import MessagesReceived from '../components/Messages';
import React from 'react'

const Chat = ({socket}) => {
  return (
    //style 
    <div className=''>
    <div>
      <MessagesReceived socket={socket} />
    </div>
  </div>  
  )
}

export default Chat;