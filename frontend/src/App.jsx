import { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import 'dotenv';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const url = "http://localhost:5000";

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <>
      <ToastContainer />
      <div className='bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 min-h-screen'>
        <div className="max-w-5xl mx-auto p-6">
          <TransactionForm onAddTransaction={addTransaction} url={url} />
          <TransactionList transactions={transactions} url={url} />
        </div>
      </div>
    </>
  );
}

export default App;
