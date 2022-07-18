import React from 'react';
import { Edit, Settings, LogOut } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../Redux/slice/authSlice';
import dummy from '../../../Assets/Img/Group 1.png'
import '../MyAccount.css'

const MyAccountDesktop = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfile = () =>{
      return navigate('/infoProfile')
  }

  const handleLogOut= () =>{
      dispatch(authActions.logout())
  }

  return (
    <div className='mma-container'>
        <div className='mma-image-content'>
            <img 
                className='mma-img-user' 
                src={user.imgB ? `data:image/png;base64,${user.imgB}`: dummy} 
                alt=""
            />
            <div>{user?.username}</div>
        </div>
        <div className='mma-content-button'>
            <div 
                className='mma-button'
                onClick={handleProfile}
            >
                <Edit /> <span>Ubah Akun</span>
            </div>
            <div className='mma-button'>
                <Settings /> <span>Pengaturan</span>
            </div>
            <div 
                className='mma-button'
                onClick={handleLogOut}
            >
                <LogOut /> <span>Keluar</span>
            </div>
        </div>
    </div> 
  )
}

export default MyAccountDesktop