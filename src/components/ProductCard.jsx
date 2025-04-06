import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='product-card' onClick={showDetail}>
        <div className='img-area'>
            <img className='img' src={item?.img} alt='img'/>
        </div>
        <div className='card-choice'>
            {item?.choice===true?"Conscious Choice":""}
        </div>
        <div className='card-title'>
            <h6>{item?.title}</h6>
        </div>
        <div className='card-price'>
            {item?.price} KRW
        </div>
        <div className='card-new'>
            {item?.new===true?"new":""}
        </div>

    </div>
  )
}

export default ProductCard