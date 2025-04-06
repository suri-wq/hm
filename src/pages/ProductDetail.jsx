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
        <Col>
          <img src={productDetail?.img}/>
        </Col>
        <Col>
          <div className='detail-title'>
            <h4>{productDetail?.title}</h4>

            </div>
          <div className='detail-price'>
            <h5>{productDetail?.price} KRW</h5>
          </div>
          
          <div>
            <Form.Select size="sm">
                <option>-</option>
              {productDetail?.size.map((size)=>(
                <option>{size}</option>
              ))}
            </Form.Select>
          </div>
          <div className="d-grid gap-2 mt-2">
            <Button variant='danger'>추가</Button>
          </div>
          
          
        </Col>
      </Row>)
    }
    </Container>
  
  )
}

export default ProductDetail