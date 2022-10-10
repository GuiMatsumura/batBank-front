import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../css/reset.css';
import RenderLogin from './authRoutes/LoginScreen.js';
import TokenContext from './context/Token';

export default function App() {
  const [token, setToken] = React.useState('');

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
