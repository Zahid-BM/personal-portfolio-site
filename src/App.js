import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './pages/ContactMe/ContactMe';
import Header from './pages/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Zandz from './pages/Projects/Zandz';
import FruitsValley from './pages/Projects/FruitsValley';
import AlemLifeCoach from './pages/Projects/AlemLifeCoach';
import ReviewBaba from './pages/Projects/ReviewBaba';




function App() {
  return (
    <div className='font-link'>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/zandz' element={<Zandz />} />
        <Route path='/fruitsvalley' element={<FruitsValley />} />
        <Route path='/alemlifecoach' element={<AlemLifeCoach />} />
        <Route path='/reviewbaba' element={<ReviewBaba />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>


    </div>
  );
}

export default App;
