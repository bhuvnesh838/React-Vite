import React from "react";
 
export const UserContext = React.createContext(null);
 
export default UserContext;

// import React, { createContext, useState } from "react";
 
// const UserContext = createContext(null);
 
// export const UserContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserContext;


