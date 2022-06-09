import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
