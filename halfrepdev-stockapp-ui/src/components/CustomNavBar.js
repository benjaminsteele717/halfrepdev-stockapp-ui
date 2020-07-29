import React from "react";
import {Button, FormControl, Nav, Navbar, Form} from "react-bootstrap";

const CustomNavBar = () => {
    return<>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        <br />
        </>
};

export default CustomNavBar
