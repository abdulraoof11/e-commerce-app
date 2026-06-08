import React, { useEffect } from 'react'
import { useShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category, subCategory}) => {
    const [relatedProducts, setRelatedProducts] = React.useState([])
    const { products } = useShopContext()
    useEffect(() => {
        const filtered = products.filter(p => p.category === category && p.subCategory === subCategory)
        setRelatedProducts(filtered.slice(0, 5))
        
        
    }, [category, subCategory, products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
           <Title text1="RELATED" text2="PRODUCTS" />
        </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
             {relatedProducts.map((product) => (
                            <ProductItem key={product.id} id={product._id} name={product.name} image={product.image} price={product.price} />
                        ))}
         </div>
    </div>
  )
}

export default RelatedProducts