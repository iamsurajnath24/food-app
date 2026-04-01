import React, { useState } from 'react'
import Nav from '../components/Nav'
import Category from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { useNavigate } from 'react-router-dom'

export default function Home({ cart, addToCart, increase, decrease }) {
  const [filteredFoods, setFilteredFoods] = useState(food_items)
  const navigate = useNavigate()

  const filter = (category) => {
    if (category === "All") {
      setFilteredFoods(food_items)
    } else {
      const newlist = food_items.filter(item => item.food_category === category)
      setFilteredFoods(newlist)
    }
  }

  return (
    <div className='w-full min-h-screen bg-amber-100'>
      
      <Nav cartCount={Object.keys(cart).length} />

      <Category catg={filter} />

      <div className='flex flex-wrap justify-center gap-4 mt-5'>
        {filteredFoods.map(item => (
          <Card
            key={item.id}
            item={item}
            cartItem={cart[item.id]}
            addToCart={addToCart}
            increase={increase}
            decrease={decrease}
          />
        ))}
      </div>

      {Object.keys(cart).length > 0 && (
        <div className='fixed bottom-5 right-5'>
          <button
            onClick={() => navigate('/cart')}
            className='bg-green-500 text-white px-6 py-3 rounded-xl'
          >
            Go to Cart
          </button>
        </div>
      )}
    </div>
  )
}