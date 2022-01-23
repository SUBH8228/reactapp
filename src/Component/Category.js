import React from 'react';
import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import ProductData from './ProductData';
import {ProductCard} from './Common';

const Category = () => {
    const params = useParams();
    return (
        <>
        <section className='home-products-section'>
            <Container>
                <Row>
                    <Col md={12} className='product-div'>
                        <h1 className='divHeading'>{params.caturl}</h1>
                        <Row>
                        {ProductData.filter(category => (category.category_url === params.caturl)).map(filteredCategory => (
                            <Col key={filteredCategory.id} md={3}>
                                <ProductCard
                                    pid={filteredCategory.id}
                                    imgsrc={filteredCategory.image}
                                    title={filteredCategory.title}
                                    category={filteredCategory.category}
                                    description={filteredCategory.description}
                                />
                            </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    );
}
export default Category;