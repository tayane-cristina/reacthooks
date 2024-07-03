import React from 'react';
import { createContext } from 'react';

export const someContext = createContext();

export const HookUseContext = ({children}) => {

  const contextValue = "Conteúdo do contexto"

  return (
    <someContext.Provider value={{contextValue}}>
      {children}
    </someContext.Provider>
  )
};