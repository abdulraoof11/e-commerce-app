import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useShopContext } from '../context/ShopContext'
import RelatedProducts from '../components/RelatedProducts'

const Products = () => {
  const { id } = useParams()
  const { products, addToCart } = useShopContext()

  const [product, setProduct] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  useEffect(() => {
    const found = products.find(p => p._id === id)
    if (found) {
      setProduct(found)
      setMainImage(found.image[0])
    }
  }, [id, products])

  if (!product) {
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <>
    <div className="flex flex-col lg:flex-row gap-10 mt-10">

      {/* LEFT - IMAGES */}
      <div className="flex lg:flex-row flex-col gap-3">
        
        {/* thumbnails */}
        <div className="flex lg:flex-col gap-2">
          {product.image.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover cursor-pointer border rounded 
              ${mainImage === img ? 'border-black' : 'border-gray-300'}`}
              alt=""
            />
          ))}
        </div>

        {/* main image */}
        <div>
          <img
            src={mainImage}
            className="w-full max-w-md object-contain rounded"
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div className="flex-1 flex flex-col gap-4">

        {/* NAME */}
        <h1 className="text-2xl font-semibold">
          {product.name}
        </h1>

        {/* PRICE */}
        <p className="text-xl font-bold text-gray-800">
          ${product.price}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm">
          {product.description}
        </p>

        {/* SIZE SELECT */}
        <div>
          <p className="font-medium mb-2">Select Size</p>

          <div className="flex gap-3">
            {product.sizes.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded 
                ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* ADD TO CART */}
        <button
          disabled={!selectedSize}
          onClick={() => addToCart(product._id, selectedSize)}
          className={`mt-4 py-3 rounded text-white font-medium 
          ${selectedSize ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Add to Cart
        </button>

        {/* EXTRA INFO */}
        <hr className="my-6" />
        <div className="text-sm text-gray-500 flex flex-col gap-1">
          <p>100% Original Product.</p>
           <p>Cash on Delivery is available on this product. </p>
            <p>Easy return and exchange policy within 7 days. </p>
          <p>Category: {product.category}</p>
          <p>Sub Category: {product.subCategory}</p>
        </div>

      </div>
    
    </div>
      <div className="mt-20">
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Product Details</b>
          <p className='border px-5 py-3 text-sm'>Reviews (0)</p>
        </div>
        <div className='flex flex-col border text-gray-500 text-sm gap-4 p-6'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus eius, rerum pariatur nisi distinctio veniam voluptatem aliquam maxime expedita ea natus debitis? Cumque, quibusdam. Iusto ipsam doloremque itaque voluptates?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
      </div>
      <RelatedProducts
        category={product.category}
        subCategory={product.subCategory}
      />
    </>
  )
}

export default Products