import { Routes, Route } from 'react-router-dom';
import { Home, Layouts, Login, ProductPage } from './Pages';
import './App.css';
import Register from './Pages/Register/Register';
import AuthRoute from './AuthRoute/AuthRoute';

const LayoutsAuth = ({children}) =>{
  return(
    <AuthRoute>
      <Layouts>
        {children}
      </Layouts>
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
    </Routes>
  );
}

export default App;
