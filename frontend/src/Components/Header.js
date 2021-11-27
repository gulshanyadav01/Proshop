import React from "react"
import { Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                  <Container fluid>
                      <LinkContainer to = "/">
                        <Navbar.Brand >ProShop</Navbar.Brand>
                      </LinkContainer>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                          <Nav
                            className="ml-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                          >
                          <LinkContainer to = "/cart">
                            <Nav.Link > <i className="fas fa-shopping-cart"> </i>Cart</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/login">
                            <Nav.Link ><i className="fas fa-user"> </i>Login</Nav.Link>
                          </LinkContainer>
                          </Nav>

                        </Navbar.Collapse>

                  </Container>
            </Navbar>
        </header>
    )
}

export default Header;