import { useState } from 'react';
import './Topping.css';

export default function Topping({ topping, dispatch }) {
  const { id, name, quantity, price } = topping;
  console.log('topping render');

  return (
    <div className="topping-item container-fluid d-flex justify-content-between align-items-center border border-secondary">
      <div className="d-xl-flex flex-column h-auto">
        <p>{name}</p>
        <span>{price}</span>
      </div>
      <div className="w-auto">
        <div className="input-group">
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch({ type: 'decrease', idTopping: id });
            }}
          >
            -
          </button>
          <input
            value={quantity}
            type="text"
            className="topping-quantity form-control"
            aria-label="Amount (to the nearest dollar)"
            type="number"
            onBlur={(e) => {
              const value = e.target.value;
              if (value >= 0 && !isNaN(value)) {
                dispatch({ type: 'update_price', quantity: e.target.value, idTopping: id });
              }
            }}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                dispatch({ type: 'set_quantity', quantity: parseInt(value), idTopping: id });
              }
            }}
          ></input>
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch({ type: 'increase', idTopping: id });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
