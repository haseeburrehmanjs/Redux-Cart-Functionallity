import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import { useSelector } from 'react-redux'
import { addItem } from './Config/Redux/CartSlice'
import { CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'

const App = () => {
  const [products, setproducts] = useState([])
  const selector = useSelector(state => state.cart.cartItem)
  console.log(selector);

  useEffect(() => {
    axios('https://dummyjson.com/carts')
      .then(responce => {
        let data = responce.data.carts
        setproducts(data)
      }).catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <Link to='addtoCart'>
        <div className='w-[50px] h-[50px] flex items-center justify-center bg-pink-600 rounded-[50px] fixed text-white hover:bg-pink-500 bottom-10 right-10 hover:shadow-lg cursor-pointer' >
          {selector.length}
        </div>
      </Link>
      <section className='container mx-auto p-2 mt-16'>
        <div>
          {products.length > 0 ? <div className='flex flex-wrap justify-center -m-4 gap-5'>{products.map((item, index) => (item.products).map(item => (
            <ProductCard key={item.id} item={item} />
          ))
          )}</div> : <div className='text-center mt-[200px]'><CircularProgress /></div>}
        </div>
      </section>
    </>
  )
}

export default App
