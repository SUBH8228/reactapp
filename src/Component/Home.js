import React, { Component } from 'react'
import {Carousel,Container,Row,Col} from 'react-bootstrap';
import ProductData from './ProductData';
import Common,{ProductCard} from './Common';

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="slider-img"
                    src="./images/banner__1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="slider-img"
                    src="./images/banner__2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="slider-img"
                    src="./images/banner__3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}
const WelcomContent = () => {
    return (
        <>
        <Common 
            page_title="Welcome To React First Project!"
            page_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        </>
    );
}

const HomeProducts = () => {
    const HomeProd = ProductData.slice(0,8);
    return (
        <>
            <section className='home-products-section'>
                <Container>
                    <Row>
                        <Col md={12} className='product-div'>
                            <h1 className='divHeading'>Our Products</h1>
                            <Row>
                            {HomeProd.map((v,k) => {
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
    );
}
export default class Home extends Component {
    render() {
        return (
            <>
                <Slider />
                <WelcomContent />
                <HomeProducts />
            </>
        )
    }
}
