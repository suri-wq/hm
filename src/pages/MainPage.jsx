import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router';
import { ClipLoader } from 'react-spinners';

const MainPage = () => {
    let [loading, setLoading] =useState(true)
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
            {productList.map((menu,index)=>(
                <Col key={index} lg={3}>
                    <ProductCard item={menu}/>
                </Col>
            ))}       
        </Row>
    </Container>
  );
};

export default MainPage;
