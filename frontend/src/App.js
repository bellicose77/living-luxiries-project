import Home from "./page/Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
