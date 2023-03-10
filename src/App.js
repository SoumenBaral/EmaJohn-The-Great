import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Inventory from './Pages/Inventory';
import Orders from './Pages/Orders';
import Review from './Pages/Review';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp'
import RequireAuth from './Pages/RequireAuth';
import ProceedShipment from './Component/ProceedShipment';
import Shop from './Pages/Shop';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <ProceedShipment></ProceedShipment>
          </RequireAuth>}
        ></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
