import PizzaImg from './PizzaImg';
import PizzaTopping from './PizzaTopping';
import { StoreProvider } from '../store';

export default function PizzaMenu() {
  console.log('piza render');
  return (
    <StoreProvider>
      <div className="order-menu container-fluid p-3">
        <div className="row">
          <PizzaImg />
          <PizzaTopping />
        </div>
      </div>
    </StoreProvider>
  );
}
