import { useContext, useReducer, useEffect, createContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [] = useReducer();
  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
