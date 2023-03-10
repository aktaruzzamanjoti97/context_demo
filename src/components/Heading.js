import React from 'react';
import { Link } from "react-router-dom";
import {
    Container, Nav, Navbar, NavbarBrand, NavItem
} from "reactstrap";

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container className='d-flex justify-content-between'>
                <NavbarBrand href="/">My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">Add User</Link>
                    </NavItem>
                </Nav>

            </Container>
        </Navbar>
    )
}