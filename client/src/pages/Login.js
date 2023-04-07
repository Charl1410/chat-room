import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";

//pulling through the props passing from App.js
const Login = ({username, setUsername, room, setRoom, socket}) => {
    
 
  return (
   <div className='container border-2 bg-white rounded-xl flex justify-center items-center w-full flex-col'>
        <h1 className="font-medium text-lg text-gray-500 mt-4">Welcome to the Chat App, Enter a username and pick a room to join</h1>
       <form className='border-solid bg-white flex flex-col p-5 justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-full'>
            <label className='text-center'>Username:</label>
                <input
                 className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                    value={username}
                    name="userName"
                    type='text'
                    placeholder="username"  
                    onChange={(e) => setUsername(e.target.value)} 


                />
            </div>
            <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                onChange={(e) => setRoom(e.target.value)} 
                >
                    
                    <option>Select Room to Join</option>
                    <option>React</option>
                    <option>Svelt</option>
                    <option>Daisy UI</option>

                </select>
            </div>

            <button className="bg-violet-500 rounded-xl text-white text-lg font-bold py-3 active:scale-[.98] transition-all active:duration-75 hover:bg-blue-500 hover:scale-[1.01] ease-in-out w-full">
            Join Room
            </button>

       </form>

   </div>
   
)
}
  


export default Login