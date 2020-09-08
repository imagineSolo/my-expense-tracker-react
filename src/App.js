import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Incomes } from './components/Incomes';
import { Transactions } from './components/Transactions';
import { AddTransaction } from './components/AddTransaction';
import { Goal } from './components/Goal';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
        <main className='container'>
          <div className='account'>
            <Balance />
            <Incomes />
          </div>
        <Transactions />
        <AddTransaction />
        <Goal />
      </main>
    </GlobalProvider>
  );
}

export default App;
