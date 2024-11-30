import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { toast } from 'react-toastify';

ChartJS.register(ArcElement, Tooltip, Legend);

const calculateTotals = (transactions) => {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  return { income, expense, net: income - expense };
};

const TransactionList = ({ url }) => {
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, net: 0 });

  const fetchAllTransaction = async () => {
    try {
      const response = await axios.get(`${url}/api/transaction/all-transaction`);
      const transactionsData = response.data.data;
      setTransactions(transactionsData);
      const totalsData = calculateTotals(transactionsData);
      setTotals(totalsData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${url}/api/transaction/delete-transaction`, { id });
      if (response.data.success) {
        fetchAllTransaction();
        toast.success("Transaction deleted");
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
      toast.error('Error deleting transaction');
    }
  };

  useEffect(() => {
    fetchAllTransaction();
  }, []);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [totals.income, totals.expense],
        backgroundColor: ['#34D399', '#F87171'],
        hoverBackgroundColor: ['#4ADE80', '#FB7185'],
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Transaction Summary</h2>

      <div className='flex justify-center items-center'>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:w-96 w-48">
        <Doughnut data={data} className=''/>
        <div className="text-center mt-6">
          <p className="text-lg font-semibold">Remaining Balance</p>
          <p className={`text-3xl font-bold ${totals.net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            Rs. {totals.net}
          </p>
        </div>
      </div>
      </div>


      <h2 className="text-2xl font-bold text-white mb-4">Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction._id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div>
              <p className="font-semibold text-gray-800">{transaction.description}</p>
              <p className="text-gray-600 text-sm">{new Date(transaction.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 text-sm">{transaction.category}</p>
              <p className={`text-sm font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                Rs. {transaction.amount}
              </p>
            </div>
            <button 
              onClick={() => handleDelete(transaction._id)} 
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
