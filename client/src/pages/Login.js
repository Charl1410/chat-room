import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";

const Login = () => {
    const [userName, setUserName] = useState('')
    


  return (
   <div className='container flex justify-center items-center w-full flex-col'>
        <h1>Welcome to the Chat App, Enter a username and pick a room to join</h1>
       <form className='border-solid border-2 border-indigo-600 flex flex-col p-5 justify-center items-center'>
            <input
                value={userName}
                name="userName"
                type='text'
                placeholder="username"

             />

            

            <div className="flex w-72 flex-col gap-6">


            </div>
            <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>Select Room to Join</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                </select>
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Join Room
            </button>

       </form>

   </div>
   
)
}
  


export default Login