import React, { useState, useEffect } from 'react';
import { 
  Container, Navbar, OverlayTrigger, Popover
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useDispatch, useSelector } from 'react-redux'
import { authActions, selectAuth } from '../../Redux/slice/authSlice'
import IconNav from '../../Assets/Img/Rectangle 127.png'
import './Navbar.css';

const data = [
  {
    id: 1,
    subject: "New Offer",
    content: "Offering Product"
  },
  {
    id: 2,
    subject: "New Offer",
    content: "Offering Product"
  },
  {
    id: 3,
    subject: "New Offer",
    content: "Offering Product"
  }
]
const user = [
  {
    title: "Akun Saya",
    action: "/akunSaya",
  },
  {
    title: "Logout",
    action: ''
  },
]

const MyNavbar = () => {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
  }, [])
  

  const overrideToggle = () =>  {
    setExpanded((prev) => !prev)
  }

  const handleList =() =>{
    return navigate("/DaftarJual")
  }

  const handleHome =() =>{
    return navigate("/")
  }

  return (
    <Navbar bg="white" expand="sm"  
      className='shadow-sm p-3 mb-5 bg-body'
      expanded={expanded}
      onToggle={overrideToggle}
    >
        <Container fluid className='px-5'>
            <Navbar.Brand
              onClick={handleHome}
            >
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
           
            { !auth && (
              <Link
                to='/login'
              >
                <div className='btn btn-primary'>
                  <Icon.LogIn/> Masuk
                </div>
              </Link>
            )}

            {auth && (
              <div className="box-button-action">
                <button
                  className='button-action-navbar'
                  type="button"
                  onClick={() => handleList()}
                >
                  <Icon.List className="" />
                </button>
                <OverlayTrigger 
                  trigger="click" 
                  placement="bottom" 
                  overlay={popovernotif}>
                  <button
                    className='button-action-navbar'
                    type="button"
                  >
                    <Icon.Bell className="" />
                  </button>
                </OverlayTrigger>

                
               <PopUser/>
              </div>
            )}

          </div>
         
        </Container>
    </Navbar>
  )
}

export default MyNavbar


const popovernotif = (
  <Popover id="popover-basic">
    <Link to="/notifikasi">
      <Popover.Header as="h3">Notification</Popover.Header>
    </Link>
    
      {
        data.map((value)=>{
          return(
            <div className='card-notification' key={value.id}>
                <span><b>{value.subject}</b></span>
                <span>{value.content}</span>
            </div>
          )
        })
      }
  </Popover>
);

const PopUser = () =>{
  const dispatch = useDispatch();
  return(
    <OverlayTrigger 
      trigger="click" 
      placement="bottom" 
      overlay={
        <Popover id="popover-basic">
            {
              user.map((value)=>{
                return(
                  <div className='card-user' key={value.title}>
                  <Popover.Header>
                    {value.title !== "Logout" && (
                      <Link 
                        className='text-link'
                        to={value.action}
                      >
                        {value.title}
                      </Link>
                    )}
                    {
                      value.title === "Logout" && (
                        <button
                          className='btn-logout'
                          onClick={() => dispatch(authActions.logout())}
                        >
                            {value.title}
                        </button>
                      )
                    }
                  
                  </Popover.Header>
                  </div>
                )
              })
            }
          
        </Popover>
      }>
        <button
          className='button-action-navbar'
          type="button"
        >
          <Icon.User className="" />
        </button>
    </OverlayTrigger>
  )
}
