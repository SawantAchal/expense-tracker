// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react'

// // const TransactionList = ({url}) => {
// //     const [transactions, setTransactions] = useState([]);
// //     const [totals, setTotals] = useState({ income: 0, expense: 0, net: 0 });

// //     const fetchAllTransaction = async () => {
// //         try {
// //             const response = await axios.get(`${url}/api/transaction/all-transaction`)
// //             console.log(response.data.data)
// //             setTransactions(response.data.data)
// //               // Calculate totals
// //         const income = response.data
// //         .filter((t) => t.type === 'income')
// //         .reduce((acc, t) => acc + t.amount, 0);
// //       const expense = response.data
// //         .filter((t) => t.type === 'expense')
// //         .reduce((acc, t) => acc + t.amount, 0);
// //       setTotals({ income, expense, net: income - expense });
// //         } catch (error) {
// //             console.error('Error fetching transactions:', error);
// //         }
// //     }

// //     const handleDelete = async(id) => {
// //         try {
// //             const response = await axios.post(`${url}/api/transaction/delete-transaction` ,{id:id})
// //             if (response.data.success) {
// //                 console.log(response.data.message);
// //                 fetchAllTransaction(); // Refresh the list
// //               } else {
// //                 console.log('Failed to remove food item.');
// //               }
// //         } catch (error) {
            
// //         }
// //     }

// //     useEffect(() => {
// //         fetchAllTransaction()
// //     },[])

// //   return (
// //     <div>TransactionList
// //               <h2>Summary</h2>
// //       <p>Total Income: ${totals.income}</p>
// //       <p>Total Expenses: ${totals.expense}</p>
// //       <p>Net Income: ${totals.net}</p>
// //       <h2>Transactions</h2>
// //       {transactions.map((transaction) => (
// //         <div key={transaction._id}>
// //           <p>{transaction.date} - {transaction.description} - {transaction.category} - ${transaction.amount} - {transaction.type}</p>
// //           <button onClick={() => handleDelete(transaction._id)}>Delete</button>
// //         </div>
// //       ))}
// //     </div>
    
// //   )
// // }

// // export default TransactionList


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// // Separate calculateTotals function
// const calculateTotals = (transactions) => {
//   const income = transactions
//     .filter((t) => t.type === 'income')
//     .reduce((acc, t) => acc + t.amount, 0);
//   const expense = transactions
//     .filter((t) => t.type === 'expense')
//     .reduce((acc, t) => acc + t.amount, 0);
  
//   return { income, expense, net: income - expense };
// };

// const TransactionList = ({ url }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [totals, setTotals] = useState({ income: 0, expense: 0, net: 0 });

//   const fetchAllTransaction = async () => {
//     try {
//       const response = await axios.get(`${url}/api/transaction/all-transaction`);
//       console.log(response.data.data);
//       const transactionsData = response.data.data;
//       setTransactions(transactionsData);
      
//       // Use calculateTotals to get totals
//       const totalsData = calculateTotals(transactionsData);
//       setTotals(totalsData);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.post(`${url}/api/transaction/delete-transaction`, { id });
//       if (response.data.success) {
//         console.log(response.data.message);
//         fetchAllTransaction(); // Refresh the list
//       } else {
//         console.log('Failed to remove transaction.');
//       }
//     } catch (error) {
//       console.error('Error deleting transaction:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllTransaction();
//   }, []);

//   return (
//     <>
//       <div className="max-w-3xl mx-auto p-4">
//         <h2 className="text-2xl font-semibold mb-4">Summary</h2>
//         <div className="bg-white shadow rounded p-4 mb-6">
//           <p className="text-green-600 font-bold">Total Income: Rs.{totals.income}</p>
//           <p className="text-red-600 font-bold">Total Expenses: Rs.{totals.expense}</p>
//           <p className={`font-bold ${totals.net >= 0 ? 'text-green-700' : 'text-red-700'}`}>Net Income: Rs.{totals.net}</p>
//         </div>
//         <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
//         <div className="space-y-4">
//           {
//             transactions.map((transaction) => (
//               <div key={transaction._id}  className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
//                 <div>
//                   <p className="font-semibold">{transaction.description}</p>
//                   <p className="text-gray-600 text-sm">{transaction.createdAt}</p>
//                   <p className="text-gray-600 text-sm">{transaction.category}</p>
//                   <p className="text-gray-600 text-sm">Rs.{transaction.amount}</p>
//                   <p className="text-gray-600 text-sm"> {transaction.type}</p>
//                 </div>
//                 <button onClick={() => handleDelete(transaction._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
//                   Delete
//                 </button>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   );
// };

// export default TransactionList;



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { format } from 'date-fns';

// // Separate calculateTotals function
// const calculateTotals = (transactions) => {
//   const income = transactions
//     .filter((t) => t.type === 'income')
//     .reduce((acc, t) => acc + t.amount, 0);
//   const expense = transactions
//     .filter((t) => t.type === 'expense')
//     .reduce((acc, t) => acc + t.amount, 0);
  
//   return { income, expense, net: income - expense };
// };

// const TransactionList = ({ url }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [totals, setTotals] = useState({ income: 0, expense: 0, net: 0 });

//   const fetchAllTransaction = async () => {
//     try {
//       const response = await axios.get(`${url}/api/transaction/all-transaction`);
//       const transactionsData = response.data.data;
//       setTransactions(transactionsData);
      
//       // Use calculateTotals to get totals
//       const totalsData = calculateTotals(transactionsData);
//       setTotals(totalsData);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.post(`${url}/api/transaction/delete-transaction`, { id });
//       if (response.data.success) {
//         fetchAllTransaction(); // Refresh the list
//       }
//     } catch (error) {
//       console.error('Error deleting transaction:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllTransaction();
//   }, []);

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Summary</h2>
//       <div className="bg-white shadow rounded p-4 mb-6">
//         <p className="text-green-600 font-bold">Total Income: Rs.{totals.income}</p>
//         <p className="text-red-600 font-bold">Total Expenses: Rs.{totals.expense}</p>
//         <p className={`font-bold ${totals.net >= 0 ? 'text-green-700' : 'text-red-700'}`}>Net Income: Rs.{totals.net}</p>
//       </div>
//       <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
//       <div className="space-y-4">
//         {transactions.map((transaction) => (
//           <div key={transaction._id} className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
//             <div>
//               <p className="font-semibold">{transaction.description}</p>
//               <p className="text-gray-600 text-sm">{format(new Date(transaction.createdAt), 'MM- dd- yy')}</p>
//               <p className="text-gray-600 text-sm">{transaction.category}</p>
//               <p className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
//                 Rs.{transaction.amount}
//               </p>
//               <p className="text-gray-600 text-sm"> {transaction.type}</p>
//             </div>
//             <button onClick={() => handleDelete(transaction._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TransactionList;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

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
      const transactionsData = response.data.data;
      setTransactions(transactionsData);
      
      // Use calculateTotals to get totals
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
        fetchAllTransaction(); // Refresh the list
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  useEffect(() => {
    fetchAllTransaction();
  }, []);

  // Chart Data Configuration
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [totals.income, totals.expense],
        backgroundColor: ['#4CAF50', '#F44336'], // Green for income, red for expenses
        hoverBackgroundColor: ['#66BB6A', '#E57373'],
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Summary</h2>
      
      <div className="bg-white shadow rounded p-4 mb-6 w-72">
        <Doughnut data={data} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction._id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
          >
            <div>
              <p className="font-semibold">{transaction.description}</p>
              <p className="text-gray-600 text-sm">{new Date(transaction.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 text-sm">{transaction.category}</p>
              <p
                className={`text-sm font-bold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                Rs.{transaction.amount}
              </p>
              <p className="text-gray-600 text-sm">{transaction.type}</p>
            </div>
            <button
              onClick={() => handleDelete(transaction._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
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
