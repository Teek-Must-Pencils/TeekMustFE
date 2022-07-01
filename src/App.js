import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home, Layouts, ProductPage, InfoProduct, Login, Notifikasi, MyAccount
} from './Pages';
import './App.css';
import Register from './Pages/Register';
import AuthRoute from './AuthRoute/AuthRoute';
import { useMediaQuery } from 'react-responsive';
import InfoProfile from './Pages/InfoProfile';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, selectToken } from './Redux/slice/authSlice';
import DaftarJual from './Pages/DaftarJual/DaftarJual';
import InfoPenawar from './Pages/InfoPenawar';

const LayoutsAuth = ({children}) =>{
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
  const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return(
    <AuthRoute>
    {isDesktopOrLaptop && (
       <Layouts>
        {children}
      </Layouts>
    )}
    {isMobile && children}
    </AuthRoute>
  )
}

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // console.log(token)

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('user');
    // const dat = JSON.parse(sessionToken)
    // console.log('ss', dat.accessToken)
    if(!token && sessionToken){
      const data = JSON.parse(sessionToken)
      dispatch(authActions.setToken(data));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route 
        path='/' 
        element={<LayoutsAuth><Home/></LayoutsAuth>}
      />
       {/* productPage */}
      <Route 
        path='/productPage' 
        element={<LayoutsAuth><ProductPage /></LayoutsAuth>}
      />
      <Route 
        path='/productPage/:id' 
        element={<LayoutsAuth><ProductPage /></LayoutsAuth>}
      />
      {/* infoProduct */}
      <Route 
        path='/infoProduct' 
        element={<LayoutsAuth><InfoProduct /></LayoutsAuth>}
      />
      <Route 
        path='/infoProduct/:id' 
        element={<LayoutsAuth><InfoProduct /></LayoutsAuth>}
      />
      <Route
        path='/infoProfile'
        element={<LayoutsAuth><InfoProfile/></LayoutsAuth>} />
      <Route 
        path='/DaftarJual' 
        element={<LayoutsAuth><DaftarJual/> </LayoutsAuth>}
      />
      <Route 
        path='/infoPenawar' 
        element={<LayoutsAuth><InfoPenawar/> </LayoutsAuth>}
      />
      <Route 
        path='/notifikasi' 
        element={<LayoutsAuth><Notifikasi/> </LayoutsAuth>}
      />
      <Route 
        path='/akunSaya' 
        element={<LayoutsAuth><MyAccount/> </LayoutsAuth>}
      />
    </Routes>
  );
}

export default App;
