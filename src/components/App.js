import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../css/reset.css';
import RenderLogin from './authRoutes/LoginScreen.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
