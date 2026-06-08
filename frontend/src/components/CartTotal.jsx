import React, { useMemo } from "react";
import { useShopContext } from "../context/ShopContext";

const CartTotal = () => {
    const { cartItems, products, cartData } = useShopContext();



  const subtotal = useMemo(() => {
    return cartData.reduce((acc, item) => {
      return acc + (item.price || 0) * (item.quantity || 0);
    }, 0);
  }, [cartData]);

  const shipping = cartData.length ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="flex justify-between text-gray-600 mb-3">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-gray-600 mb-3">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

    </div>
  );
};

export default CartTotal;