import { Routes, Route } from 'react-router-dom';
import { Home, Layouts, Login } from './Pages';
import './App.css';
import Register from './Pages/Register/Register';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layouts><Home/></Layouts>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
