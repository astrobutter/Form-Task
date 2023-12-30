import { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [ user, setUser]= useState({
    name: "",
    address: "",
    gender:"",
    sport:"base",
    skill:false
  })
  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(user);
    const response = await axios.post('http://localhost:3001/', {user})
    console.log("Response from Server",response.data);
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      handleSubmit
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};