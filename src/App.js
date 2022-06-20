import { Routes, Route } from 'react-router-dom';
import {
  Home, Layouts, ProductPage, InfoProduct, Login} from './Pages';
import './App.css';
import Register from '././Pages/Register';
import AuthRoute from './AuthRoute/AuthRoute';
import { useMediaQuery } from 'react-responsive';
import InfoProfile from './Pages/InfoProfile';



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
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route 
        path='/' 
        element={<LayoutsAuth><Home/></LayoutsAuth>}
      />
      <Route 
        path='/productPage' 
        element={<LayoutsAuth><ProductPage /></LayoutsAuth>}
      />
      <Route 
        path='/infoProduct' 
        element={<LayoutsAuth><InfoProduct /></LayoutsAuth>}
      />
      <Route
      path='/infoProfile'
      element={<LayoutsAuth><InfoProfile/></LayoutsAuth>} />
    </Routes>
  );
}

export default App;
