import React from 'react';
import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import ProductData from './ProductData';
import ErrorPage from './ErrorPage';

const ProductDetails = () => {
    const params = useParams();
    if(ProductData[params.id-1] === undefined){
       return <ErrorPage />;
    }
    //console.warn(ProductData[params.id-1]);
    return (
        <>
        <section className='home-products-section'>
            <Container>
                <Row>
                    <Col md={12} className='product-div'>
                        <h1 className='divHeading'>{ProductData[params.id-1].title}</h1>
                        <Row>
                            <Col md={5} className='padding0'>
                                <div className='prodImgDiv'>
                                    <img src={ProductData[params.id-1].image} alt={ProductData[params.id-1].title} />
                                </div>
                            </Col>
                            <Col md={7} className='padding0'>
                                <div className='divDescribe'>
                                    <div className='divDetails'>
                                        <table className='table table-borderless'>
                                            <thead></thead>
                                            <tbody>                                        
                                            <tr>
                                                <th>Product Name</th>
                                                <th>:</th>
                                                <td>{ProductData[params.id-1].title}</td>
                                            </tr>
                                            <tr>
                                                <th>Category</th>
                                                <th>:</th>
                                                <td>{ProductData[params.id-1].category}</td>
                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                <th>:</th>
                                                <td>{ProductData[params.id-1].price}</td>
                                            </tr>
                                            <tr>
                                                <th>Sizes</th>
                                                <th>:</th>
                                                <td>{ProductData[params.id-1].size.join()}</td>
                                            </tr>
                                            <tr>
                                                <th>Colors</th>
                                                <th>:</th>
                                                <td>{ProductData[params.id-1].color.join()}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>{ProductData[params.id-1].description}</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    );
}
export default ProductDetails;