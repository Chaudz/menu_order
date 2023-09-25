import { useReducer, useState } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';

const initStateClone = { ...initState, toppings: initState.toppings.map((topping) => ({ ...topping })) };

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initStateClone);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
