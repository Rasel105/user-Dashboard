import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Navbar from './components/Navbar/Navbar';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProduct from './components/Dashboard/ManageProduct';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='manage-product' element={<ManageProduct />}></Route>
          {/* <Route path='addareview' element={<AddAReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='makeadmin' element={<MakeAdmin />}></Route>
          <Route path='addproduct' element={<AddAProduct />}></Route>
          <Route path='manage-products' element={<ManageProducts />}></Route>
          <Route path='manage-all-orders' element={<ManageAllOrders />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
