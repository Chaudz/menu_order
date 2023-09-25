import { useStore } from '../store';

export default function Checkout() {
  const [state, dispatch] = useStore();
  const PriceTotal = state.total;
  return (
    <div className="d-flex flex-column">
      <div className="container-fluid d-flex justify-content-between border border-secondary p-2">
        <p>Total</p>
        <span>{PriceTotal}</span>
      </div>
      <div className="container-fluid border border-secondary py-2">
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
}
