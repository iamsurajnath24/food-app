import React from 'react'
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaHamburgerSolid } from "react-icons/lia";
import { FaBowlFood } from "react-icons/fa6";
import { LuPizza } from "react-icons/lu";


export default function Category(props) {
  

    const category=[
        {
            id:1,
            name:"All",
            image:<MdOutlineAlignHorizontalLeft className='w-[40px] h-[40px]  text-green-300' />
        },
        {
            id:2,
            name:"breakfast",
            image:<MdOutlineFreeBreakfast className='w-[40px] h-[40px]  text-green-300' />
        },
        {
            id:3,
            name:"soups",
            image:<LuSoup  className='w-[40px] h-[40px]  text-green-300'/>
        },{
            id:4,
            name:"pasta",
            image:<LiaHamburgerSolid className='w-[40px] h-[40px]  text-green-300' />
        },
        {
            id:5,
            name:"main_course",
            image:<FaBowlFood  className='w-[40px] h-[40px]  text-green-300'/>
        },
        {
            id:6,
            name:"pizza",
            image:<LuPizza   className='w-[40px] h-[40px]  text-green-300'/>
        }
    ]
  return (
   <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
    {category.map((item)=>{
     return  <div className='w-[140px] h-[120px] bg-amber-50 flex flex-col items-center gap-5 shadow-md rounded-2xl text-shadow-lg hover:bg-emerald-400 cursor-pointer transition-all duration-500'  onClick={()=>props.catg(item.name)} >
     {item.name}{item.image} 

     </div>

    })}
   </div>
  )
}
