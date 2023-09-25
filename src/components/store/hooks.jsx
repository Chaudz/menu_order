import { useContext } from 'react';
import Context from './Context';

export const useStore = () => {
  const [toppings, dispatch] = useContext(Context);

  return [toppings, dispatch];
};
