import React, { useMemo } from "react";
import { useShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  
  return (
    <div className=" px-4 md:px-10 py-10">

      <h1 className="text-3xl font-bold mb-8">Place Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT FORM */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow space-y-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Delivery Information
          </h2>

          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="First Name"
            />
            <input
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Last Name"
            />
          </div>

          {/* EMAIL */}
          <input
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Email Address"
          />

          {/* STREET */}
          <input
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Street Address"
          />

          {/* LOCATION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="State"
            />
            <input
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Zip Code"
            />
            <input
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Country"
            />
          </div>

          {/* PHONE */}
          <input
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Phone Number"
          />

          {/* PAYMENT */}
          <h2 className="text-xl font-semibold mt-6 text-gray-800">
            Payment Method
          </h2>

          <div className="space-y-3">

            <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer hover:border-black transition">
              <input type="radio" name="payment" />
              💳 Stripe Payment
            </label>

            <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer hover:border-black transition">
              <input type="radio" name="payment" />
              🚚 Cash on Delivery
            </label>

          </div>

          {/* BUTTON */}
          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            Place Order
          </button>

        </div>

        {/* RIGHT SIDE */}
        <CartTotal  />

      </div>
    </div>
  );
};

export default PlaceOrder;