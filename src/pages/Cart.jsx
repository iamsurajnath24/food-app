import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({ cart, increase, decrease }) {
  const navigate = useNavigate()
  const items = Object.values(cart)

  const total = items.reduce(
    (acc, item) => acc + item.qty * item.price, 0
  )

  return (
    <div className='w-full min-h-screen bg-amber-100 p-5'>

      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-emerald-700'>Your Cart</h1>

        <button 
          onClick={() => navigate('/')}
          className='bg-emerald-400 px-5 py-2 rounded-xl text-white hover:bg-emerald-500'
        >
          Back to Menu
        </button>
      </div>

      {/* Empty */}
      {items.length === 0 ? (
        <div className='flex justify-center items-center h-[60vh] text-xl text-gray-600'>
          Your cart is empty 😢
        </div>
      ) : (
        <>
          {/* Items */}
          <div className='flex flex-wrap gap-5 justify-center'>
            {items.map(item => (
              <div 
                key={item.id} 
                className='w-[280px] bg-amber-50 p-4 rounded-2xl shadow-md flex flex-col gap-3 hover:shadow-xl transition-all'
              >
                <img 
                  src={item.food_image} 
                  className='h-[160px] w-full rounded-xl object-cover'
                />

                <h2 className='text-xl font-semibold'>{item.food_name}</h2>

                <p className='text-emerald-700 font-medium'>
                  ₹ {item.price}
                </p>

                {/* Qty control */}
                <div className='flex justify-between items-center mt-2'>
                  
                  <div className='flex items-center gap-3'>
                    <button 
                      onClick={() => decrease(item.id)}
                      className='bg-red-300 px-3 py-1 rounded-lg hover:bg-red-400'
                    >
                      -
                    </button>

                    <span className='font-bold'>{item.qty}</span>

                    <button 
                      onClick={() => increase(item.id)}
                      className='bg-green-300 px-3 py-1 rounded-lg hover:bg-green-400'
                    >
                      +
                    </button>
                  </div>

                  <span className='text-sm text-gray-600'>
                    ₹ {item.qty * item.price}
                  </span>

                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className='mt-10 flex justify-center'>
            <div className='bg-amber-50 p-6 rounded-2xl shadow-lg w-[300px] text-center'>
              
              <h2 className='text-xl font-semibold mb-3'>Total</h2>

              <p className='text-2xl font-bold text-emerald-600'>
                ₹ {total}
              </p>

              <button 
                onClick={() => navigate('/checkout')}
                className='mt-4 w-full bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600'
              >
                Checkout
              </button>

            </div>
          </div>
        </>
      )}
    </div>
  )
}