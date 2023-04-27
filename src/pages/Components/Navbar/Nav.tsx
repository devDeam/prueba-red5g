import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logoSmall from '../../../assets/dashboard/logoSufiSmall.svg'
import icon1 from '../../../assets/icons/logout.png'

const Nav = () => {
  return (
    <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='mx-auto'>
            <img
              alt=""
              src={logoSmall}
              width="83"
              height="45"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
          <span >
            <a style={{"fontFamily":"sans-serif",
            "fontSize":"14px",
            "cursor":"pointer",
            "fontWeight":"bold"}}>
            Cerrar Sesión
            <img src={icon1}
              width="32"
              height="32"
            />
            </a>
          </span>
      </Navbar>
  )
}

export default Nav;