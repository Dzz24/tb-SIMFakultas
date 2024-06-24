import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Login from "./pages/Login";


const tokenSekarang = localStorage.getItem('token');

export function PrivateRoute(){
  return tokenSekarang?<Outlet/>:<Login/>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Beranda />}  />
        <Route path = '/login' element = {<Login />}  />
        
      </Routes>
    </Router>
  )
}

export default App;