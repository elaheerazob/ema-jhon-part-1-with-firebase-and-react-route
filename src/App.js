import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory'
import Orders from './components/Orders/Orders'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shapping from './components/Shapping/Shapping';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        {/* <Route path='/inventory' element={<Inventory></Inventory>}></Route> */}
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shapping' element={
          <RequireAuth>
            <Shapping></Shapping>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
