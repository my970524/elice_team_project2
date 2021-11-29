import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CameraPage from './pages/CameraPage';
import FindPwPage from './pages/FindPwPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScanningPage from './pages/ScanningPage';
import ScanFailPage from './pages/ScanFailPage';
import PillBoxPage from './pages/PillBoxPage';
import DirectSearchPage from './pages/DirectSearchPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/findPw" element={<FindPwPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/scanning" element={<ScanningPage />} />
        <Route path="/scanfail" element={<ScanFailPage />} />
        <Route path="/pillbox" element={<PillBoxPage />} />
        <Route path="/direct" element={<DirectSearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
