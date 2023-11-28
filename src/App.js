import './App.css';
import TransactionForm from './components/TransactionForm/transactionform';
import TotalBalance from './components/TotalBalance/totalbalance';
import IncomeList from './components/IncomeList/incomelist';
import ExpenseList from './components/ExpenseList/expenselist'
import React from 'react';
import { useState } from 'react';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);

    if (transaction.type === 'income') {
      setTotalIncome(totalIncome + transaction.amount);
    } else {
      setTotalExpense(totalExpense + transaction.amount);
    }
  };

  const getTotalBalance = () => {
    return totalIncome - totalExpense;
  };

  return (
    <div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <IncomeList transactions={transactions.filter((t) => t.type === 'income')} totalIncome={totalIncome} />
      <ExpenseList transactions={transactions.filter((t) => t.type === 'expense')} totalExpense={totalExpense} />
      <TotalBalance totalBalance={getTotalBalance()} />
    </div>
  );
};

export default App;
