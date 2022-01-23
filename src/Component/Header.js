import React, { Component } from 'react'
import {
    Nav,
    Navbar,
    Container,
    Button,
    DropdownButton,
    Dropdown
  } from 'react-bootstrap';
import ProductData from './ProductData';
import TimeSheet from './TimeSheet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default class Header extends Component {
    render() {
        const HeaderProd = ProductData.slice(0,6);
        return (
            <>
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand className="navBrand" href="/">Ware House</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <label className="input-group">
                                    <label className="input-group-prepend">
                                        <div className="input-group-text"><AccessTimeIcon /></div>
                                    </label>
                                    <div className="input-group-text"><TimeSheet /></div>
                                </label>
                            </Nav>
                            <Nav>
                                <Button key={1} className="mr5" href="/">Home</Button>
                                <Button key={2} className="mr5" href="/about">About</Button>
                                <DropdownButton className="mr5" title="Products">
                                    {HeaderProd.map((v,k) => {
                                        return (
                                            <Dropdown.Item key={v.id} href={"http://localhost:3000/products/"+ v.id}>{v.title}</Dropdown.Item>
                                        )
                                    })}
                                    <Dropdown.Divider />
                                    <Dropdown.Item key="4" href="/products/">View All</Dropdown.Item>
                                </DropdownButton>
                                <Button key={3} className="mr5" href="/contact">Contact</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
