import { Routes, Route } from 'react-router-dom';
import { Home, Layouts, Login, ProductPage } from './Pages';
import './App.css';
import Register from './Pages/Register/Register';
import AuthRoute from './AuthRoute/AuthRoute';
import { useMediaQuery } from 'react-responsive';

const LayoutsAuth = ({children}) =>{
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
  const isMobile = useMediaQuery({query: '(max-width: 425px)'})
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
        element={<LayoutsAuth><ProductPage /></LayoutsAuth>
        }
      />
    </Routes>
  );
}

export default App;
