import React, { useState, useEffect } from 'react';
import { 
  Container, Navbar, OverlayTrigger, Popover
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux'
import { selectAuth, selectRole } from '../../Redux/slice/authSlice'
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

const MyNavbar = () => {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth)
  const role = useSelector(selectRole)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
  }, [])
  

  const overrideToggle = () =>  {
    setExpanded((prev) => !prev)
  }

  const handleList =() =>{
    if(role.includes('seller')){
      return navigate("/DaftarJual")
    }else{
      return navigate("/DaftarTawar")
    }
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

                
                <button
                  className='button-action-navbar'
                  type="button"
                  onClick={()=>navigate('/akunSaya')}
                >
                  <Icon.User className="" />
                </button>
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