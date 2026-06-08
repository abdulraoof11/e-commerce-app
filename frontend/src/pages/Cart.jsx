import React, { useMemo } from "react";
import { useShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItems, updateQuantity , cartData} = useShopContext();
  const navigate = useNavigate();



  return (
    <div className="bg-gray-50 min-h-screen pt-10 px-4 md:px-10">

      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>

      {cartData.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty 🛒</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5">

            {cartData.map((item) => (
              <div
                key={`${item._id}-${item.size}`}
                className="bg-white p-5 rounded-2xl shadow flex items-center gap-5"
              >
                <img
                  src={item.image?.[0]}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500 text-sm">
                    ${item.price} • Size: {item.size}
                  </p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.size, item.quantity - 1)
                    }
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="px-4">{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.size, item.quantity + 1)
                    }
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky top-10 h-fit">

            <CartTotal  />

            <button
              onClick={() => navigate("/place-order")}
              className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;