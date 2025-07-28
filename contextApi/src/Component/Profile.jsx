import React, {useState, useContext} from 'react';

import UserContext from '../Context/UserContext.js';

function Profile(){
    const {user} = useContext(UserContext);
    
         if(!user) return <div
                            className='w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                             Please login to view your profile
                             </div>;
         return  <div 
                     className='w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500' >
                  Welcome {user.username}
                </div>
    
}

export default Profile;