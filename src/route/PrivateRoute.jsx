import React from 'react'
import { Navigate } from 'react-router'
import ProductDetail from '../pages/ProductDetail'

const PrivateRoute = ({authenticate}) => {
  return authenticate == true?<ProductDetail/>:<Navigate to='/login'/>
}

export default PrivateRoute