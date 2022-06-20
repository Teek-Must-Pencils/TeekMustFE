import React, { useState, useEffect } from 'react';
import { 
  Container, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import IconNav from '../../Assets/Img/Rectangle 127.png'
import './Navbar.css';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
  }, [])
  

  const overrideToggle = () =>  {
    setExpanded((prev) => !prev)
  }

  return (
    <Navbar bg="white" expand="sm"  
      className='shadow-sm p-3 mb-5 bg-body'
      expanded={expanded}
      onToggle={overrideToggle}
    >
        <Container fluid className='px-5'>
            <Navbar.Brand href="#">
              <img src={IconNav} alt='Icon' />
            </Navbar.Brand>
          
          <div className='d-flex flex-row justify-content-between w-100 my-2 gap-1'>
            <form className="d-flex">
              <input
                type="text"
                placeholder="Cari di sini..."
                className="w-100 inp-search"
              />
              <button type='submit'>
                <Icon.Search color='gray'/>
              </button>
            </form>
            <Link
              to='/login'
            >
              <div className='btn btn-primary'>
                <Icon.LogIn/> Masuk
              </div>
            </Link>
          </div>
         
        </Container>
    </Navbar>
  )
}

export default MyNavbar