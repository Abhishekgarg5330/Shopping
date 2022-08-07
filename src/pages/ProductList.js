import React from 'react'
import Card from '../components/Card'
import { CartDetails } from '../components/CartDetails'
import Footer from '../components/Footer'
import Login from '../components/Login'
import { useStateContext } from '../context/StateContext'
import dataSet from '../utils/fetchData.json'
import './ProductList.css'

const ProductList = () => {
  const { showCart, onAdd } = useStateContext()
  return (
    <div className='product'>
      <div id='product_div'>
        {dataSet.map(data => (
          <>
            <Card key={data.id} data={data} />

            <hr />
          </>
        ))}
      </div>
      {showCart && <CartDetails />}
      <div style={{ width: '100%', height: '100px' }}></div>
      <Footer />
    </div>
  )
}

export default ProductList
