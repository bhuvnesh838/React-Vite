import React, { useEffect } from 'react';
import { useState } from 'react';
function Github(){
    const[data, setData] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/bhuvnesh838')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    }, []);
    return(
        <div className='text-center m-4 bg-gray-500 text-white p-4 rounded-lg'>
           Follower: {data.followers} <br/>
           <img className="flex items-center space-x-3 lg:order-2" src={data.avatar_url} alt="Git Diaplay Profile" width={300}/> <br/>
        </div>
    )
}
export default Github;