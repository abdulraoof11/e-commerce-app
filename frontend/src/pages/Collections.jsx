import React, { useEffect } from 'react'
import { useShopContext } from '../context/ShopContext';
import {assets} from '../assets/frontend_assets/assets';
import ProductItem from './../components/ProductItem';
import Title from '../components/Title';

const Collections = () => {
  const {products, search, setSearch} = useShopContext();
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [category , setCategory] = React.useState([]);
  const [subCategory , setSubCategory] = React.useState([]);
 
  const toogleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(category.filter(item => item !== e.target.value));
    }else{
      setCategory([...category, e.target.value]);
    } 
  }
  const toogleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(subCategory.filter(item => item !== e.target.value));
    }else{
      setSubCategory([...subCategory, e.target.value]);
    } 
  }
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (search.length > 0){
      productsCopy = productsCopy.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(product => category.includes(product.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(product => subCategory.includes(product.subCategory));
    }
    setFilterProducts(productsCopy);
  }

  const sortProducts = (sortType) => {
    let productsCopy = filterProducts.slice();
   switch (sortType) {
    case 'low_high':
     setFilterProducts(productsCopy.sort((a,b) => a.price - b.price));
      break;
    case 'high_low':
      setFilterProducts(productsCopy.sort((a,b) => b.price - a.price));
      break;
    default:
      applyFilter();
      break;
   }
  }
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);


  return (
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : 'rotate-0'}`} />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 font-light text-sm text-gray-700'>  
           <div className='flex items-center gap-2'>
              <input type="checkbox" value={'Men'} onChange={toogleCategory} className='w-3 ' /> <span>Men</span>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" value={'Women'} onChange={toogleCategory} className='w-3 ' /> <span>Women</span>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" value={'Kids'} className='w-3 ' /> <span>Kids</span>
            </div>
             </div>
           
        </div>
         {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 font-light text-sm text-gray-700'>  
           <div className='flex items-center gap-2'>
              <input type="checkbox" value={'Topwear'} onChange={toogleSubCategory} className='w-3 ' /> <span>TopWear</span>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" value={'Bottomwear'} onChange={toogleSubCategory} className='w-3 ' /> <span>BottomWear</span>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" value={'Winterwear'} onChange={toogleSubCategory} className='w-3 ' /> <span>WinterWear</span>
            </div>
             </div>
           
        </div>
      </div>

      {/* Products Grid */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl  mb-4'>
         <Title text1="ALL" text2="COLLECTIONS" />
         <select name="" id="" className='border-2 border-gray-300 px-2 py-1 text-sm' onChange={(e) => sortProducts(e.target.value)}>
          <option value="relevant">Sort by: Relevant</option>
          <option value="low_high">Price: Low to High</option>
          <option value="high_low">Price: High to Low</option>
         </select>
         </div>
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
       
        {filterProducts.map(product => (
         <div><ProductItem key={product.id} id={product._id} name={product.name} image={product.image} price={product.price} /></div>
        )) }
      </div>
     </div>
    </div>
  )
}

export default Collections