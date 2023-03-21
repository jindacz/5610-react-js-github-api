import React, { useContext, useState, useEffect } from "react";

// react function to create context
const UserContext = React.createContext();

// the wrapper
function UserProvider({ children }) {
  const [user, setUser] = useState();
  // everything want to expose in context, i.e multiple content
  const value = { user, setUser };
  // {children} is everything within context
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
