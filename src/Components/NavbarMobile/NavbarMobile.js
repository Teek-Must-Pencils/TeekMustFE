import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Menu, Search, LogIn, Bell, List, User } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions, selectAuth, selectRole } from '../../Redux/slice/authSlice';
import { searchActions } from '../../Redux/slice/searchSlice';
import './NavbarMobile.css' 

const NavbarMobile = (props) => {
    const { isSearch, location } = props;
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    const role = useSelector(selectRole);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState();

    const handleShow = () =>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }
    const handleLogout = () =>{
        dispatch(authActions.logout());
    }

    const handleSubmit = (value) => {
        value.preventDefault()
        dispatch(searchActions.setSearch(search))
    }
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
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
                <form className="container-search-mobile" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Cari di sini..."
                        className="mobile-search-input"
                        onChange={e => handleSearch(e)}
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
        <Offcanvas show={show} onHide={handleClose} className="bg-canvas">
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
                    to={`${role.includes('seller') ? '/DaftarJual' : '/DaftarTawar'}`}
                    className='menu'
                >
                    <div >
                        <List/> <span>{role.includes('seller') ? 'Daftar Jual' : 'Daftar Tawar'}</span>
                    </div>
                </Link>
                <Link
                    to='/akunSaya'
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