import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TransactionForm = ({ onAddTransaction, url }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    amount: '',
    category: '',
    type: 'income',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/transaction/add-income`, form);
      if (response.data.success) {
        toast.success("Transaction Added Successfully!");
        onAddTransaction(response.data);
        setForm({ title: '', description: '', amount: '', category: '', type: 'income' });
      } else {
        toast.error("Failed to Add Transaction.");
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
      toast.error("Error adding transaction.");
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600">Add Transaction</h2>
      
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
        placeholder="Title"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="" disabled>Select Category</option>
        <option value="Shopping">Shopping</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Rent">Rent</option>
        <option value="Health">Health</option>
      </select>
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
