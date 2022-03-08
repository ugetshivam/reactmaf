import React from 'react'
import axios from 'axios'
import "./Product.css"
const Product = (props) => {
  return (
    <li className='product'>
        <div>
                <img src={props.image} alt='img'/>
                <h2 className="name">{props.title}</h2>
                {/* <p className="desc">{props.description}</p> */}
                <p className="price">${props.price}</p>
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={1}
                />
                <button className="add-btn">+ Add</button>
            </div>
    </li>
  )
}

export default Product