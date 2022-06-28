import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Menu, Search, LogIn, Bell, List, User } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions, selectAuth } from '../../Redux/slice/authSlice';
import './NavbarMobile.css' 

const NavbarMobile = (props) => {
    const { isSearch, location } = props;
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    const [show, setShow] = useState(false);

    const handleShow = () =>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }
    const handleLogout = () =>{
        dispatch(authActions.logout());
    }
  return (
    <>
        <div className='mobile-content-menu'>
            <button 
            className='toggle-button'
            onClick={()=>handleShow()}
            >
                <Menu />
            </button>
            <div className='search-mobile'>
            {isSearch !== false && (
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
            )}
            {isSearch === false && (
                <div className='mobile-location-title'>
                    {location}
                </div>
            )}
            
            </div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          <Link to='/' className='menu'>
              <Offcanvas.Title>Teek Must Pencil</Offcanvas.Title>
          </Link>
          
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
                        <User/> <span>Akun Saya</span>
                    </div>
                </Link>
                <button
                    className='btn btn-primary'
                    onClick={()=>handleLogout()}
                >
                    Logout
                </button>
            </div>
          )}
           
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default NavbarMobile