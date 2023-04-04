import React, { useState } from 'react';

const Login = () => {
    const [userName, setUserName] = useState('')
    


  return (
   <div className='container flex justify-center items-center w-full flex-col'>
       <form className='border-solid border-2 border-indigo-600 flex flex-col p-5'>
            <input
                value={userName}
                name="userName"
                type='text'
                placeholder="username"

             />
            
              <input
                value={userName}
                name="userName"
                type='text'
                placeholder="username"

             />

             <button>Join Room</button>


       </form>

   </div>
   
)
}
  


export default Login