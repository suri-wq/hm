import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <img className='img' src={item?.img}/>
        <div>
            {item?.choice===true?"Conscious Choice":""}
        </div>
        <div>
            {item?.title}
        </div>
        <div>
            {item?.price}
        </div>
        <div>
            {item?.new===true?"new":""}
        </div>

    </div>
  )
}

export default ProductCard