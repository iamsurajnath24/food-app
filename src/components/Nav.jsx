import React from 'react'
import { MdOutlineNoFood } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

export default function Nav({ cartCount, search, setSearch }) {
  return (
   
    <div className='w-full h-[100px] flex justify-between items-center px-10'>
      
      {/* Logo */}
      <div className='w-[50px] h-[45px] bg-amber-50 flex justify-center items-center rounded-md shadow-xl'>
        <MdOutlineNoFood className='w-[30px] h-[30px] text-emerald-400' />
      </div>

      {/* Search */}
      <form 
        onSubmit={(e) => e.preventDefault()}
        className='rounded-md shadow-xl w-[300px] h-[40px] flex items-center px-4 gap-3 bg-amber-50 md:w-[600px] lg:w-[800px]'
      >
        <AiOutlineSearch />
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full outline-0 bg-transparent'
          placeholder='search your food'
        />
      </form>

      {/* Cart */}
      <div className='w-[50px] h-[45px] bg-amber-50 flex justify-center items-center rounded-md shadow-xl relative'>
        
        {/* Cart Count */}
        <span className='absolute top-0 right-0 text-green-500 font-bold'>
          {cartCount}
        </span>

        <PiShoppingCartSimpleDuotone className='w-[30px] h-[30px] text-emerald-500' />
      </div>
      
    </div>
  
  )
}