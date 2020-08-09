import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () =>{
    return(
        <>
        
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/react-calipso">Essoerra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/react-calipso">Home</Nav.Link>
                <Nav.Link href="/react-calipso/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    );
};

export default Header;