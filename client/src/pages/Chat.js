//here we are importing the array of messages from the component 
import MessagesReceived from '../components/Messages';
import React from 'react'

const Chat = ({socket}) => {
  return (
    //style 
    <div className='w-96 h-96 border-black-500'>
    <div>
      <MessagesReceived socket={socket} />
    </div>
  </div>  
  )
}

export default Chat;