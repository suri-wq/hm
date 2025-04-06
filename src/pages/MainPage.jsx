import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const MainPage = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch('https://my-json-server.typicode.com/suri-wq/hm/products');
      const data = await res.json();
      console.log('Fetched data:', data);

      setProductList(data)
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('Current productList state:', productList);

  return (
    <Container>
        <Row>
            {productList.map((menu)=>(
                <Col lg={3}>
                <ProductCard item={menu}/>
                </Col>
            ))}       
        </Row>
    </Container>
  );
};

export default MainPage;
