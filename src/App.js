import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './pages/ContactMe/ContactMe';
import Header from './pages/Header/Header';



function App() {
  return (
    <div className='font-link'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>


    </div>
  );
}

export default App;
