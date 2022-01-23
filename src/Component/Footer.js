import React, { Component } from 'react';
import '../CommonStyles.css';
import {FooterLink} from './FooterStyles';
import { Container,Row,Col,Button } from 'react-bootstrap';
import ProductData from './ProductData';

export default class Footer extends Component {
    render() {
        return (
          <>
            <div className="footerDiv">
              <Container>
                <Row>
                  <Col md={4}>
                    <div className="heading">About Us</div>
                    <div>Container is defined but never used. Link is defined but never used. Search for the keyword to learn more about each warning. Container is defined but never used. Link is defined but never used. Search for the keyword to learn more about each warning...</div>
                  </Col>
                  <Col md={2}>
                    <div className="heading">Categories</div>
                    <ul>
                      <li><FooterLink href='/category/t-shirts'>T-Shirts</FooterLink></li>
                      <li><FooterLink href='/category/jeans'>Jeans</FooterLink></li>
                      <li><FooterLink href='/category/shirts'>Shirts</FooterLink></li>
                      <li><FooterLink href='/category/pyjamas'>Pyjamas</FooterLink></li>
                      <li><FooterLink href='/category/kids-wear'>Kids Wear</FooterLink></li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <div className="heading">Products</div>
                    <ul>
                      <li><FooterLink href='/products/1'>{ProductData[0].title}</FooterLink></li>
                      <li><FooterLink href='/products/2'>{ProductData[1].title}</FooterLink></li>
                      <li><FooterLink href='/products/3'>{ProductData[2].title}</FooterLink></li>
                      <li><FooterLink href='/products/4'>{ProductData[3].title}</FooterLink></li>
                      <li><FooterLink href='/products/5'>{ProductData[4].title}</FooterLink></li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <div className="heading">Contact Us</div>
                    <ul>
                      <li><span className="liSpan">Contact Person:</span>Mr. Decoxta</li>
                      <li><span className="liSpan">Mobile:</span>+1 112-345-212</li>
                      <li><span className="liSpan">Email:</span>decoxta@test.com</li>
                      <li><span className="liSpan">Address:</span>Sent Peterson Road, Washington, USA.</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="importantLinks">
                      <Button size="sm" href='/'>Home</Button>{' '}
                      <Button size="sm" href='/about'>About</Button>{' '}
                      <Button size="sm" href='/products'>Products</Button>{' '}
                      <Button size="sm" href='/contact'>Contact</Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="footerBottom">
                  <div>Copyright@2022</div>
            </div>
          </>
        )
    }
}
