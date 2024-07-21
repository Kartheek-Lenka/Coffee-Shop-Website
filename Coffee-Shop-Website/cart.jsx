import React from 'react';

function CartItem({ item, deliveryCharge }) {
  const { name, price, quantity } = item;
  const subTotal = price * quantity;
  const finalPrice = subTotal + deliveryCharge;

  return (
    <div className="cart-item">
      <p>{name} (x{quantity})</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>SubTotal: ${subTotal.toFixed(2)}</p>
      <p>Delivery Charge: ${deliveryCharge.toFixed(2)}</p>
      <p>Final Price: ${finalPrice.toFixed(2)}</p>
    </div>
  );
}

function CartTotal({ items, deliveryCharge }) {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subTotalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = subTotalPrice + deliveryCharge;

  return (
    <div className="cart-total">
      <p>Total Items: {totalItems}</p>
      <p>SubTotal: ${subTotalPrice.toFixed(2)}</p>
      <p>Delivery Charge: ${deliveryCharge.toFixed(2)}</p>
      <p>Final Price: ${finalPrice.toFixed(2)}</p>
      {/* Button or link to checkout can be added here */}
    </div>
  );
}

export default function Cart({ items, deliveryCharge }) {
  return (
    <div className="cart">
      {items.map((item) => (
        <CartItem key={item.id} item={item} deliveryCharge={deliveryCharge} />
      ))}
      <CartTotal items={items} deliveryCharge={deliveryCharge} />
    </div>
  );
}
