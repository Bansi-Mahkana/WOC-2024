import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';

function App() {
  return (
    <div className='main'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/past-events' element={<PastEvents/>}/>
      </Routes>
    </div>
  )
}

export default App