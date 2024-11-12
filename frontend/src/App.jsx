import { useState } from 'react';
import './App.css'
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const url = "http://localhost:5000"
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} url={url}/>
      <TransactionList transactions={transactions} url={url}/>
    </>
  )
}

export default App
