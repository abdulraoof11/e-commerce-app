import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShopContext()
  const location = useLocation()

  const visible = location.pathname.startsWith("/collections")

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          type="text"
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
        />
        <img src={assets.search_icon} className='w-4' />
      </div>

      <img
        src={assets.cross_icon}
        className='w-3 inline cursor-pointer'
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null
}

export default SearchBar