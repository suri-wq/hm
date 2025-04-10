import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { ClipLoader } from 'react-spinners'

const ProductDetail = () => {
  let [loading, setLoading] =useState(false)
  let {id} = useParams()
  const [productDetail, setProductDetail] =useState(null)
  const getProductDetail=async ()=>{
    setLoading(true)
    const res = await fetch(`https://my-json-server.typicode.com/suri-wq/hm/products/${id}`);
    const data = await res.json()
    setLoading(false)
    setProductDetail(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])
  
  return (
    <Container>
      {
      loading?
      (
        <ClipLoader
          color='#ccc'
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className='spinner'
        />
      )
        :
      (<Row>
        <Col xs='12' md='12' lg='8'>
          <img className='product-img' src={productDetail?.img}/>
        </Col>
        <Col xs='12' md='12' lg='4'>
          <div className='detail-title'>
            <div>{productDetail?.title}</div>

            </div>
          <div className='detail-price'>
            <div>{productDetail?.price} KRW</div>
          </div>
          
          <div>
            <div>
              SELECT SIZE
            </div>
           
            <Form>
              <div className="size-radio-group">
                {productDetail?.size.map((size, idx) => (
                  <label key={idx} className="size-radio">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </Form>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button className='product-add'>추가</button>
          </div>
          
          
        </Col>
      </Row>)
    }
    </Container>
  
  )
}

export default ProductDetail