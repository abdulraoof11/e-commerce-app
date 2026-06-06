import React from 'react'
import { useShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useShopContext();

  return (
    <Link
      className="text-gray-700 cursor-pointer flex flex-col h-full"
      to={`/products/${id}`}
    >
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>

      {/* THIS FIXES ALIGNMENT */}
      <div className="flex flex-col flex-1 justify-between pt-3">
        <p className="text-sm">
          {name}
        </p>

        <p className="font-medium text-sm mt-2">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;