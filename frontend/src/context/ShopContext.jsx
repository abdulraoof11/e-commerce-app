import { createContext, useContext } from "react";
import {products} from '../assets/frontend_assets/assets';

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 10;
    const value = {
        products,
        currency,
        delivery_fee
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