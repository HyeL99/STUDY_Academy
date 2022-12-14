import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LOGO from '../assets/하얀제목.png'

const Navigation = () => {
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
            <Link to="/" className='navItem'>홈</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/movies" className='navItem'>영화를 한눈에</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="#" className='navItem'>이 달의 화제작</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="#" className='navItem'>콕! 찜한 영화</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation