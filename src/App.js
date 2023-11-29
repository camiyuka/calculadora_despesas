import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm/transactionform';
import TotalBalance from './components/TotalBalance/totalbalance';
import IncomeList from './components/IncomeList/incomelist';
import ExpenseList from './components/ExpenseList/expenselist';

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

  const handleDeleteTransaction = (index, amount, type) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);

    setTransactions(updatedTransactions);

    if (type === 'income') {
      setTotalIncome(totalIncome - amount);
    } else {
      setTotalExpense(totalExpense - amount);
    }
  };
  const getTotalBalance = () => {
    return totalIncome - totalExpense;
  };

  return (
    <div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <IncomeList
        transactions={transactions.filter((t) => t.type === 'income')}
        totalIncome={totalIncome}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <ExpenseList
        transactions={transactions.filter((t) => t.type === 'expense')}
        totalExpense={totalExpense}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <TotalBalance totalBalance={getTotalBalance()} />
    </div>
  );
};

export default App;
