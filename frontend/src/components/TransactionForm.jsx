import React, { useState } from 'react'
import axios from 'axios'

const TransactionForm = ({ onAddTransaction  , url}) => {
    const [form, setForm] = useState({
        title:'',
        description: '',
        // category: '',
        amount: '',
        type: 'income', // default set to income
      });

      const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/transaction/add-income` , form)
            onAddTransaction(response.data)
            console.log(response.data)
            setForm({title:'' , description: '', category: '', amount: '', type: 'income' });
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
      }
      
  return (
    <>
      <form onSubmit={onFormSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded shadow">
        <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder='title' className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required className="w-full p-2 border rounded"/>
        {/* <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required className="w-full p-2 border rounded"/> */}
        <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required className="w-full p-2 border rounded"/>
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full p-2 border rounded">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Transaction</button>
      </form>
    </>
  )
}

export default TransactionForm