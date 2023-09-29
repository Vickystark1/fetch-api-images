import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Navbar.css'
const Navbar = () => {

  return (
    <Container>
        <div className='navbar'>
        <p>React Studios</p>
        <ul className='navlist'>
            <li className='navlink'><a href=''>Home</a> </li>
            <li className='navlink'><a href=''>Login</a> </li>
        </ul>
        </div>
    </Container>
  )
}

export default Navbar