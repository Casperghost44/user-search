import React, { createContext, ReactNode } from "react";
import DbContextType from "../types/DbContextType";
import axios from "axios";

export const DbContext = createContext<DbContextType | undefined>(undefined);

export const DbProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const SERVER = "https://jsonplaceholder.typicode.com";

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${SERVER}/users`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const dbContextValue = { getAllUsers };

  return (
    <DbContext.Provider value={dbContextValue}>{children}</DbContext.Provider>
  );
};
