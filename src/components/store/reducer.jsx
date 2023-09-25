import { toppingData } from './data';

export const INCREASE_QUANTITY = 'increase';
export const DECREASE_QUANTITY = 'decrease';
export const RESET_PIZA = 'reset_piza';
export const SET_QUANTITY = 'set_quantity';
export const UPDATE_PRICE = 'update_price';
export const initState = {
  toppings: toppingData,
  total: '3.2$',
};
const priceTotalDefault = Number(initState.total.split('$')[0]);
const calculatePriceTotal = (toppings) => {
  let priceTotal = toppings.reduce((total, topping) => {
    return total + Number(topping.price.split('$')[0]) * Number(topping.quantity);
  }, 0);

  return (priceTotal + priceTotalDefault).toFixed(2);
};

export default function reducer(state, action) {
  let topping;
  let newPriceTotal;
  let newState;
  switch (action.type) {
    case INCREASE_QUANTITY:
      topping = state.toppings.find((topping) => topping.id == action.idTopping);
      topping.quantity += 1;
      newPriceTotal = calculatePriceTotal(state.toppings);
      newState = { ...state, total: `${newPriceTotal}$` };

      return newState;
    case DECREASE_QUANTITY:
      topping = state.toppings.find((topping) => topping.id == action.idTopping);
      if (topping.quantity > 0) {
        topping.quantity -= 1;
        newPriceTotal = calculatePriceTotal(state.toppings);
        newState = { ...state, total: `${newPriceTotal}$` };

        return newState;
      }
      return state;
    case RESET_PIZA:
      return { ...initState, toppings: initState.toppings.map((topping) => ({ ...topping })) };
    case SET_QUANTITY:
      topping = state.toppings.find((topping) => topping.id == action.idTopping);
      topping.quantity = parseInt(action.quantity, 10);
      newState = { ...state };

      return newState;
    case UPDATE_PRICE:
      if (action.quantity.trim() == '') {
        topping = state.toppings.find((topping) => topping.id == action.idTopping);
        topping.quantity = 0;
      }
      newPriceTotal = calculatePriceTotal(state.toppings);
      newState = { ...state, total: `${newPriceTotal}$` };

      return newState;

    default:
      throw new Error('Unknown action');
  }
}
