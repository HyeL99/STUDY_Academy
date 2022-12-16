import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LOGO from '../assets/하얀제목.png'

const NavigationHome = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='navTop'>
      <Container fluid>
        <Navbar.Brand href="/"><img src={LOGO} alt="영화를 콕!" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" className='navItem'>홈</a>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationHome