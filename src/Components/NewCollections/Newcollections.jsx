import React from 'react'
import "./Newcollections.css"
import new_collections from '../Assets/new_collections.js'
import Item from '../Items/Item.jsx'

const Newcollections = () => {
  return (
    <div className="new-collections">
        <h1>MW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                
            })}
        </div>
    </div>
  )
}

export default Newcollections