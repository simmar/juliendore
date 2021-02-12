import React, {createContext, useEffect, useState} from 'react';
export const CartContext = createContext();

const Context = (props) => {
  const [status, setStatus] = useState('false');
  const [values, setValues] = useState('');

  useEffect(
    () => setValues((curentValues) => (curentValues = {name: 'aimé'})),
    []
  );

  return (
    <CartContext.Provider value={{status, setStatus, values, setValues}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
