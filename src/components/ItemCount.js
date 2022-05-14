import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSubstract = () => {
    if (count > initial) {
      setCount((counter) => counter - 1);
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setCount((counter) => counter + 1);
    }
  };

  return (
    <div>
      <div>
        <button className="btn btn-outline-primary btn-sm" onClick={handleSubstract}>-</button>
        <span className="btn-sm text-xl font-bold">{count}</span>
        <button className="btn btn-outline-primary btn-sm" onClick={handleAdd}>+</button>
      </div>
      <button onClick={() => onAdd(count)} className="btn btn-primar">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;

