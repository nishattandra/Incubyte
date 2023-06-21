/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                <Container >
                        <Navbar.Brand href="#home" className='fw-bolder fs-3' style={{color:'slateblue'}}>Incubyte</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end fw-semibold'>
                            <Nav className='' >
                                <Nav.Link style={{color:'slateblue'}}>About Us</Nav.Link>
                                <Nav.Link style={{color:'slateblue'}}>Our Expertise</Nav.Link>
                                <Nav.Link style={{color:'slateblue'}}>Success Stories</Nav.Link>
                                <Nav.Link style={{color:'slateblue'}}>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;