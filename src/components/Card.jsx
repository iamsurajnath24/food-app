export default function Card({ item, cartItem, addToCart, increase, decrease }) {
  return (
    <div className='w-[280px] bg-amber-50 p-3 rounded-xl'>
      
      <img src={item.food_image} className='h-[180px] w-full rounded-xl' />

      <h2 className='text-xl font-bold'>{item.food_name}</h2>
      <p>Rs {item.price}</p>

      {cartItem ? (
        <div className='flex gap-3 items-center mt-3'>
          <button onClick={() => decrease(item.id)} className='px-3 bg-red-300'>-</button>
          <span>{cartItem.qty}</span>
          <button onClick={() => increase(item.id)} className='px-3 bg-green-300'>+</button>
        </div>
      ) : (
        <button 
          onClick={() => addToCart(item)}
          className='mt-3 w-full bg-green-300 p-2 rounded-xl'
        >
          Add to Dish
        </button>
      )}
    </div>
  )
}