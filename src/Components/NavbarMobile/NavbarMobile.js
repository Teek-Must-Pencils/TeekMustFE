import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Menu, Search, LogIn, Bell, List } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../Redux/slice/authSlice';
import './NavbarMobile.css' 

const NavbarMobile = () => {
    const auth = useSelector(selectAuth);
    const [show, setShow] = useState(false);

    const handleShow = () =>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }
  return (
    <>
        <div className='mobile-content-menu home'>
            <button 
            className='mobile-float-menu'
            onClick={()=>handleShow()}
            >
                <Menu />
            </button>
            <div className='search-mobile'>
            <form className="container-search-mobile">
              <input
                type="text"
                placeholder="Cari di sini..."
                className="mobile-search-input"
              />
              <button type='submit'>
                <Search color='gray'/>
              </button>
            </form>
            </div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Teek Must Pencil</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {!auth && (
            <Link
                to='/login'
            >
                <div className='btn btn-primary'>
                    <LogIn/> <span>Masuk</span>
                </div>
            </Link>
          )}
          {auth &&(
            <div className='button-login-active'>
                <Link
                    to='/notifikasi'
                    className='menu'
                >
                    <div>
                        <Bell/> <span>Notifikasi</span>
                    </div>
                </Link>
                <Link
                    to='/notifikasi'
                    className='menu'
                >
                    <div >
                        <List/> <span>Daftar Jual</span>
                    </div>
                </Link>
                <Link
                    to='/infoProfile'
                    className='menu'
                >
                    <div >
                        <Bell/> <span>Akun Saya</span>
                    </div>
                </Link>
            </div>
          )}
           
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default NavbarMobile