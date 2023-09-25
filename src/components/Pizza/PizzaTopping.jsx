import FormReset from './Form_reset';
import ToppingList from './Topping_list';

export default function PizzaTopping() {
  console.log('pz topping render');
  return (
    <div className="col-4">
      <FormReset />
      <ToppingList />
    </div>
  );
}
