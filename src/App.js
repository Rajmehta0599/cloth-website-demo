import './App.css';
import Nav from './Component/Nav';
import Register from './Component/Register';
import Login from './Component/Login';
import Productpage from'./Component/Shirt';
import Shirt from './Component/Shirt';
import { Route, Routes } from 'react-router-dom';
import Tshirt from './Component/Tshirt';
import Home from './Component/Home';
import Thankyou from './Component/Thankyou';
import Buyingpage from './Component/Buyingpage';
function App() {
  return (
   <>
    <Nav />
    {/* <Shirt/> */}
    {/* <Register />    */}
    {/* <Login/> */}
    {/* <Productpage/> */}
    {/* <Thankyou/> */}
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/productpage' element={<Productpage/>}/>
      <Route path='/tshirt' element={<Tshirt/>}/>
      <Route path='/shirt' element={<Shirt/>}/>
      <Route path='/userbuy' element={<Buyingpage/>}/>
      {/* <Route path='/userconfirmationpage' element={<Productpage/>}/> */}
      {/* <Route path='/usergreetingpage' element={<Productpage/>}/> */}
      {/* <Route path='/productcartpage' element={<Productpage/>}/> */}
      <Route path='/thankyou' element={<Thankyou/>}/>
    </Routes>
    </>
  );
}

export default App;
