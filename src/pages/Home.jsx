import React,{useState} from 'react'
import Nav from '../components/Nav'
import Category from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'

export default function  Home() {
  const [part,setPart]=useState(food_items)

   const filter=(category)=>{
    if(category==="All"){
      setPart(food_items)}
      else{
        let newlist=food_items.filter((item)=>item.food_category===category
        )
        setPart(newlist)
      }
  }
  return (
    <div className='w-full min-h-screen bg-amber-100'>
    
    <Nav></Nav>
    <Category catg={filter}></Category>
    <div className='w-full flex flex-wrap gap-3 pt-5 pb-8 justify-center items-center'>{part.map((items)=>{
      return <Card name={items.food_name} food_type={items.food_type} food_image={items.food_image} food_price={items.price}   ></Card>

    })}</div>
    
    </div>
    
        
    
  )
}
 
