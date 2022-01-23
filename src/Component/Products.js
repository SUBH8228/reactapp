import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ProductData from './ProductData';
import {ProductCard} from './Common';

export default class Products extends Component {
    render() {
        return (
            <>
                <section className='home-products-section'>
                    <Container>
                        <Row>
                            <Col md={12} className='product-div'>
                                <h1 className='divHeading'>All Products</h1>
                                <Row>
                                    {ProductData.map((v,k) => {
                                        return (
                                            <Col key={v.id} md={3}>
                                                <ProductCard
                                                    pid={v.id}
                                                    imgsrc={v.image}
                                                    title={v.title}
                                                    category={v.category}
                                                    description={v.description}
                                                />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}
