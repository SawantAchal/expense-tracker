# Expense Tracker #
  An Expense Tracker web application built with **Vite** and **React** on the frontend, and a **Node.js/Express** backend with **MongoDB** for data storage. 
  This application allows users to track their income and expenses, view a visual summary, and categorize transactions.

  **Deploy link** - https://github.com/SawantAchal/expense-tracker.git
  
  ## Features ## 
  - **Add Transactions**: Users can add income or expense transactions with title, description, category, amount, and type.
  - **View Summary**: A circular chart shows a visual breakdown of income and expenses.
  - **Transaction List**: View all transactions in a dynamically updated list.
  - **Delete Transactions**: Allows users to delete individual transactions.
  - **Notifications**: User feedback on actions via `react-toastify`.
    
   ## Tech Stack ##
   **Frontend**: Vite, React, Tailwind CSS, Axios, react-chartjs-2, Chart.js 
   **Backend**: Node.js, Express, MongoDB 
   **Notifications**: React-Toastify for user alerts
   **Deployment**: Render for both frontend and backend
   
   ## Project Setup ##
     **Prerequisites** - Node.js and npm or yarn installed - MongoDB database (or MongoDB Atlas) #\
   ## Environment Variables
   1. **Frontend** (`.env` in the root of the frontend directory): ``` VITE_API_URL=http://localhost:5000 ```
   2. **Backend** (`.env` in the root of the backend directory): ``` PORT=5000 MONGO_URI=<Your MongoDB Connection String> ```
    
### Installation ###
  **1. Clone the Repository**
        - ```bash git clone (https://github.com/SawantAchal/expense-tracker.git) 
        
        - cd expense-tracker ```
  
  **2. Backend Setup**
      - Navigate to the backend directory: ```bash cd server ```
      
      - Install backend dependencies: ```bash npm install ```
      
      - Start the backend server: ```bash npm start ```
      
      - The backend will run on `http://localhost:5000` (or the port specified in `.env`). 
      
  **3. Frontend Setup**
       - Navigate to the frontend directory: ```bash cd ../client ```
       
       - Install frontend dependencies: ```bash npm install ```
       
       - Start the frontend server: ```bash npm run dev ```
       
       - The frontend will run on `http://localhost:3000` (or as specified by Vite).
       
## Deployment
   **Frontend** : Deploy on Render as a static site with the build command `npm run build` and publish directory `dist`.
  **Backend**: Deploy on Render as a web service, using `npm start` and configuring the `MONGO_URI` and `PORT` environment variables.
  **Open the App**: Go to the deployed frontend URL. 
  **Add Transactions**: Use the form to add income and expense transactions.
  **View Summary**: Check the summary circular chart for a breakdown of income vs. expenses.
  **Delete Transactions**: Remove unwanted transactions from the list.
  **Notifications**: Toast notifications will appear for success or error messages. 
  
## Code Overview ## 
  ### Backend -
   **API Endpoints**:
      - `POST /api/transaction/add-income`: Adds a new income transaction.
      
      - `GET /api/transaction/all-transaction`: Fetches all transactions.
      
      - `POST /api/transaction/delete-transaction`: Deletes a transaction.
  
  ### Frontend
   **Components**:
      - `TransactionForm`: A form for adding transactions.
      
      - `TransactionList`: Displays all transactions and allows for deletion.
      
  **Toast Notifications**: Feedback for actions (e.g., success, error). 
