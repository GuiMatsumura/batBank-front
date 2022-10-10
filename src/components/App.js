import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../css/reset.css';
import RenderLogin from './authRoutes/LoginScreen.js';
import TokenContext from './context/Token';
import RenderSignUp from './authRoutes/SignUpScreen';
import RenderHome from './Home';
import RenderDeposit from './balanceRoutes/DepositScreen';
import RenderPayment from './balanceRoutes/PaymentScreen';
import RenderTransfer from './balanceRoutes/TransferScreen';
import RenderTransactions from './balanceRoutes/TransactionsScreen';
import RenderMenu from './Menu';

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
          <Route path="/pay" element={<RenderPayment />} />
          <Route path="/transfer" element={<RenderTransfer />} />
          <Route path="/transactions" element={<RenderTransactions />} />
          <Route path="/menu" element={<RenderMenu />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
