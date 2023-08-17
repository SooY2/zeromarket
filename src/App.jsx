
import './App.css';
import zeromarketLogo from "/src/assets/zeromarketLogo.png";

//라우트 
import {Routes,Route,useNavigate} from "react-router-dom";
//import page
import Login from './pages/Login';
import Register from './pages/Register';
import Mainpage from './pages/Mainpage';
import Myzero from './pages/Myzero';
//recoil
import {RecoilRoot} from "recoil";
import Signup from './pages/Signup';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';


function App() {
  const nav=useNavigate();
  return (
    <RecoilRoot>
      <div className="App">
        <header className='mainheader'><img src={zeromarketLogo} onClick={()=>{nav("/")}}/></header>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signup/register' element={<Register/>}/>
          <Route path='/zeromarket/:userId' element={<Mainpage/>}/>
          <Route path='/myzero/:userId' element={<Myzero/>}/>
          <Route path='/registerZero/:userId' element={<Product/>}/>
          <Route path='/zeromarket/:userId/:productId' element={<ProductDetail/>}/>
          
        </Routes>
      </div>
    </RecoilRoot>
  )
}

export default App
