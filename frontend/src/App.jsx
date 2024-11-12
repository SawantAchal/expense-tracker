import { useState } from 'react';
import './App.css'
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import 'dotenv'

function App() {
  const [transactions, setTransactions] = useState([]);
  const url = import.meta.env.VITE_API_URL;

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold mt-3'>Expense Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} url={url}/>
      <TransactionList transactions={transactions} url={url}/>
    </>
  )
}

export default App
