import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to = "/login" />
  }

  return (
    <div className="App">

      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />                {/* pvt routing */}
      <Routes>
        <Route path= '/' element={<Navigate to="/login" />} />
        <Route path = '/login' element={<Login/>} />
        <Route path = '/signup' element={<Signup/>} />
        <Route path = '/home' element={<PrivateRoute element ={<Home/>}/>} />

      </Routes>
    </div>
  );
}

export default App;
