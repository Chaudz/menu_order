import Topping from './Topping';
import Checkout from './Checkout';
import { useStore } from '../store';

export default function ToppingList() {
  const [state, dispatch] = useStore();
  const toppings = state.toppings;

  return (
    <div className="border border-secondary mt-3">
      {toppings.map((topping) => {
        return <Topping key={topping.id} topping={topping} dispatch={dispatch} />;
      })}
      <Checkout />
    </div>
  );
}
