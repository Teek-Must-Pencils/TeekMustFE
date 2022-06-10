import React, { useState, useEffect } from 'react';
import { 
  Container, Navbar, Nav, NavDropdown, Button, Form,
  FormControl 
} from 'react-bootstrap';
import IconNav from '../../Assets/Img/Rectangle 127.png'
import './Navbar.css';

const MyNavbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [expanded, setExpanded] = useState(false)

  console.log(expanded ? 'col' : 'not')

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
  
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  
  console.log(screenWidth)

  const overrideToggle = () =>  {
    setExpanded((prev) => !prev)
  }

  return (
    <Navbar bg="light" expand="md"  
      expanded={expanded}
      onToggle={overrideToggle}
    >
        <Container fluid className='px-5'>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {screenWidth >= 768 &&
            <Navbar.Brand href="#">
              <img src={IconNav} alt='Icon' />
            </Navbar.Brand>
          }
          <Navbar.Collapse id="navbarScroll" >
          
          <div className='d-flex justify-content-between w-100'>
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                className="w-75"
              />
              <button className=''>Search</button>
            </form>
            <Button>Login</Button>
          </div>
          </Navbar.Collapse>
          
          { (screenWidth <= 768 && !expanded) &&
                <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className=""
                        aria-label="Search"
                      />
                      <button>Search</button>
                </Form>
          }
         
        </Container>
    </Navbar>
  )
}

export default MyNavbar