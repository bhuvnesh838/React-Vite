import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 p-8 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800'>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
                Login
            </h2>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
                className='w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className='w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />

            <button
                onClick={handleSubmit}
                className='w-full px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
                SUBMIT
            </button>
        </div>
    )
}

export default Login;