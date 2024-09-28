import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { CircularProgress } from '@mui/material'

const Addtocart = () => {
  const selector = useSelector(state => state.cart.cartItem)

  function deleteBtn(){
    alert('this function is comming soon')
  }

  return (
    <>
      <div className='w-[50px] h-[50px] flex items-center justify-center bg-pink-600 rounded-[50px] fixed text-white hover:bg-pink-500 bottom-10 right-10 hover:shadow-lg cursor-pointer' >
        {selector.length}
      </div>
      <section className='container mx-auto p-2 mt-16'>
        <div>
          {selector.length > 0 ? <div className='flex flex-wrap justify-center -m-4 gap-5'>{selector.map((item, index) => (
            <ProductCard key={item.id} item={item}/>
          ))}</div> : <div className='text-center mt-[200px]'><CircularProgress/></div>} 
        </div>
      </section>
    </>
  )
}

export default Addtocart
