import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';
import { ClipLoader } from 'react-spinners'

const MainPage = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    let [loading, setLoading] =useState(false)

    const getProducts = async () => {
        let searchQuery = query.get("q")||"";
        try {
        setLoading(true)
        const res = await fetch(`https://my-json-server.typicode.com/suri-wq/hm/products?q=${searchQuery}`);
        const data = await res.json();
        setLoading(false)
        setProductList(data)
        } catch (error) {
        console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [query]);


  return (
    <Container>
        
        {loading?(
                <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem', color: '#666' }}>
                로딩 중...
              </div>
            ) : setQuery&&productList.length === 0? (
                <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem', color: '#666' }}>
                    검색 결과가 없습니다.
                </div>
            ) : (
                <Row>

                {productList.map((menu,index)=>(
                
                    <Col key={index} lg={3}>
                        <ProductCard item={menu}/>
                    </Col>
                ))} 
                    </Row>

            )}
                  
    </Container>
  );
};

export default MainPage;
