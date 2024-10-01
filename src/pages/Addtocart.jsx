import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { CircularProgress } from '@mui/material'

const Addtocart = () => {
  const selector = useSelector(state => state.cart.cartItem)

  return (
    <>
      <div className='w-[50px] h-[50px] flex items-center justify-center bg-pink-600 rounded-[50px] fixed text-white hover:bg-pink-500 bottom-10 right-10 hover:shadow-lg cursor-pointer' >
        {selector.length}
      </div>
      <section className='container mx-auto p-2 mt-16'>
        <div>
          {selector.length > 0 ? <div className='flex flex-wrap justify-center -m-4 gap-5'>{selector.map((item, index) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md" bis_skin_checked={1}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={item.thumbnail}
                />
              </a>
              <div className="mt-4" bis_skin_checked={1}>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  ID: {item.id}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">$ {Math.round(item.price)}</p>
                <div className='text-center mt-3'>
                  <button onClick={() => delete(alert('this function is comming soon'))} type="button" className="text-white bg-pink-700 hover:bg-pink-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                   Delete
                  </button>
                </div>
              </div>
            </div>
          ))}</div> : <div className='text-center mt-[200px]'><CircularProgress /></div>}
        </div>
      </section>
    </>
  )
}

export default Addtocart
