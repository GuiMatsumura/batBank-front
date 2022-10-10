import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../css/reset.css';
import RenderLogin from './authRoutes/LoginScreen.js';
import TokenContext from './context/Token';
import RenderSignUp from './authRoutes/SignUpScreen';
import RenderHome from './Home';
import RenderDeposit from './balanceRoutes/DepositScreen';

export default function App() {
  const [token, setToken] = React.useState('');

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />} />
          <Route path="/signup" element={<RenderSignUp />} />
          <Route path="/home" element={<RenderHome />} />
          <Route path="/deposit" element={<RenderDeposit />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
