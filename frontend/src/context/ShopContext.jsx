import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});

  // ======================
  // ADD TO CART
  // ======================
  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  // ======================
  // UPDATE QUANTITY (+ / -)
  // ======================
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity <= 0) {
      delete cartData[itemId][size];

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);
  };

  // ======================
  // CART COUNT
  // ======================
  const getCartCount = () => {
    let count = 0;

    for (let itemId in cartItems) {
      for (let size in cartItems[itemId]) {
        count += cartItems[itemId][size];
      }
    }

    return count;
  };

  // ======================
  // LOCAL STORAGE LOAD
  // ======================
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // ======================
  // LOCAL STORAGE SAVE
  // ======================
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Debug
  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);
  
    const cartData = useMemo(() => {
      const data = [];
  
      for (const itemId in cartItems) {
        const product = products.find((p) => p._id === itemId);
        if (!product) continue;
  
        for (const size in cartItems[itemId]) {
          const quantity = cartItems[itemId][size];
  
          if (quantity > 0) {
            data.push({ ...product, size, quantity });
          }
        }
      }
  
      return data;
    }, [cartItems, products]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    updateQuantity,
    getCartCount,
    cartData
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};