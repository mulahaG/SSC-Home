import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/common/HeaderComponent';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* 고정 컴포넌트 */}
      <HeaderComponent/>
      {/* 갈아끼워지는 컴포넌트들 */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
