import React from 'react';
import { createContext } from 'react';

export const someContext = createContext();

export const HookUseContext = ({children}) => {

  const contextValue = <div>
    <h2>UseContext</h2>
    <p>O hook useContext foi demonstrado no efeito de opção de tema posto no header da página, um contexto foi criado, dentro dele um estado e uma função, que foi facilmente tranferida para outro
      arquivo onde foi utilizado para criar o efeito de opção de tema claro ou escuro </p>
  </div>

  return (
    <someContext.Provider value={{contextValue}}>
      {children}
    </someContext.Provider>
  )
};