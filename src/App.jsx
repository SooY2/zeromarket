
import './App.css';
import zeromarketLogo from "/src/assets/zeromarketLogo.png";

//라우트 
import {Routes,Route} from "react-router-dom";
//import page
import Login from './pages/Login';
import Register from './pages/Register';
import Mainpage from './pages/Mainpage';

//recoil
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className='mainheader'><img src={zeromarketLogo} /></header>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/zeromarket/:userId' element={<Mainpage/>}/>
        </Routes>
      </div>
    </RecoilRoot>
  )
}

export default App
