import { Routes, Route } from 'react-router-dom';
import { Home, Layouts, Login } from './Pages';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layouts><Home/></Layouts>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  );
}

export default App;
