import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Category from './Component/Category';
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ErrorPage from './Component/ErrorPage';

function App() {
  return (
    <>
      <Header />
        <section>
          <Row>
            <Col md={12}>
              <Router>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/category/:caturl" element={<Category />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </Router>
            </Col>
          </Row>
        </section>
      <Footer />
    </>
  );
}

export default App;
