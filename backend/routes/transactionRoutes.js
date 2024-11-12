import express from 'express'
import {addTransaction, deleteTransaction, getAllTransaction } from '../controller/transactionController.js';


const transactionRouter = express.Router();

transactionRouter.post('/add-income' , addTransaction)
transactionRouter.get('/all-transaction' , getAllTransaction)
transactionRouter.post('/delete-transaction' , deleteTransaction)



export default transactionRouter