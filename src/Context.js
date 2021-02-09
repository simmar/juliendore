import React, {createContext, useState} from 'react';
export const CartContext = createContext ();

const Context = props => {
  const [status, setStatus] = useState ('false');

  return (
    <CartContext.Provider value={{status, setStatus}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
