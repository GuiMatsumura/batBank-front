import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../css/reset.css';
import RenderLogin from './authRoutes/LoginScreen.js';
import TokenContext from './context/Token';
import RenderSignUp from './authRoutes/SignUpScreen';
import RenderHome from './Home';

export default function App() {
  const [token, setToken] = React.useState('');

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />} />
          <Route path="/signup" element={<RenderSignUp />} />
          <Route path="/home" element={<RenderHome />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
