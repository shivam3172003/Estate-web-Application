import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Load user data from localStorage (or set to null if not found)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Function to update user state and sync with localStorage
  const updateUser = (data) => {
    setCurrentUser(data);
  };

  // Sync `currentUser` with localStorage whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user"); // Clear storage if user logs out
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
