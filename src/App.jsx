
import './App.css';
import zeromarketLogo from "/src/assets/zeromarketLogo.png";

//라우트 
import {Routes,Route} from "react-router-dom";
//import page
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <header><img src={zeromarketLogo} /></header>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
