// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const TransactionList = ({url}) => {
//     const [transactions, setTransactions] = useState([]);
//     const [totals, setTotals] = useState({ income: 0, expense: 0, net: 0 });

//     const fetchAllTransaction = async () => {
//         try {
//             const response = await axios.get(`${url}/api/transaction/all-transaction`)
//             console.log(response.data.data)
//             setTransactions(response.data.data)
//               // Calculate totals
//         const income = response.data
//         .filter((t) => t.type === 'income')
//         .reduce((acc, t) => acc + t.amount, 0);
//       const expense = response.data
//         .filter((t) => t.type === 'expense')
//         .reduce((acc, t) => acc + t.amount, 0);
//       setTotals({ income, expense, net: income - expense });
//         } catch (error) {
//             console.error('Error fetching transactions:', error);
//         }
//     }

//     const handleDelete = async(id) => {
//         try {
//             const response = await axios.post(`${url}/api/transaction/delete-transaction` ,{id:id})
//             if (response.data.success) {
//                 console.log(response.data.message);
//                 fetchAllTransaction(); // Refresh the list
//               } else {
//                 console.log('Failed to remove food item.');
//               }
//         } catch (error) {
            
//         }
//     }

//     useEffect(() => {
//         fetchAllTransaction()
//     },[])

//   return (
//     <div>TransactionList
//               <h2>Summary</h2>
//       <p>Total Income: ${totals.income}</p>
//       <p>Total Expenses: ${totals.expense}</p>
//       <p>Net Income: ${totals.net}</p>
//       <h2>Transactions</h2>
//       {transactions.map((transaction) => (
//         <div key={transaction._id}>
//           <p>{transaction.date} - {transaction.description} - {transaction.category} - ${transaction.amount} - {transaction.type}</p>
//           <button onClick={() => handleDelete(transaction._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
    
//   )
// }

// export default TransactionList


import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Separate calculateTotals function
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
      console.log(response.data.data);
      const transactionsData = response.data.data;
      setTransactions(transactionsData);
      
      // Use calculateTotals to get totals
      const totalsData = calculateTotals(transactionsData);
      setTotals(totalsData);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${url}/api/transaction/delete-transaction`, { id });
      if (response.data.success) {
        console.log(response.data.message);
        fetchAllTransaction(); // Refresh the list
      } else {
        console.log('Failed to remove transaction.');
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  useEffect(() => {
    fetchAllTransaction();
  }, []);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: Rs.{totals.income}</p>
      <p>Total Expenses: Rs.{totals.expense}</p>
      <p>Net Income: Rs.{totals.net}</p>

      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction._id}>
          <p>{transaction.date} - {transaction.description} - {transaction.category} - ${transaction.amount} - {transaction.type}</p>
          <button onClick={() => handleDelete(transaction._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
