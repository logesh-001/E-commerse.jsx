import React, { useContext } from 'react'
import '.../Css/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'


const Shopcatagory = () => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">

    </div>
  )
}

export default Shopcatagory