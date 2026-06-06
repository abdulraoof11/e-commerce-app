import React, { useEffect } from 'react'
import { useShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const [bestSellers, setBestSellers] = React.useState([]);
    const { products } = useShopContext();
   useEffect(() => {
    const bestSeller = products.filter(product => product.bestseller);
    setBestSellers(bestSeller.slice(0, 5));
   }, []);
  return (
    <div className='my-8'>
        <div className='text-center py-8 text-3xl '><Title text1="OUR BEST" text2="SELLER"/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSellers.map((product) => (
                <ProductItem key={product.id} id={product._id} name={product.name} image={product.image} price={product.price} />
            ))}
        </div>
    </div>
  )
}

export default BestSeller