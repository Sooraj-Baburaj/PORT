import './App.css';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
