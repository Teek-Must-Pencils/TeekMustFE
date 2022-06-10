import { Routes, Route } from 'react-router-dom';
import { Home, Layouts } from './Pages';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layouts><Home/></Layouts>}/>
    </Routes>
  );
}

export default App;
