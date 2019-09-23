import React from 'react'
import {useSelector} from 'react-redux'
//import { Link } from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'

const Header = () => {

    const state_name = useSelector((state) => state.records.name)

  return (
      <Navbar bg="success" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href={ `/${state_name}` }>Registros Presión Arterial</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href={ `/record/new/${state_name}`}>Agregar Registro</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2 text-light" />
              <Button variant="outline-light" className="rounded-0">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header;