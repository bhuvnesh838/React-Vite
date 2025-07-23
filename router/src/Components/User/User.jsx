import React from 'react';
import { useParams } from 'react-router-dom';
function User() {
    const { userId } = useParams();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>
            <p className="text-lg">User ID: {userId}</p>
            {/* You can add more user details here */}
        </div>
    );
}
export default User;