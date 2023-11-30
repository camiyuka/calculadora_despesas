import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm/transactionform';
import TotalBalance from './components/TotalBalance/totalbalance';
import IncomeList from './components/IncomeList/incomelist';
import ExpenseList from './components/ExpenseList/expenselist';
import './App.css';

const App = () => {
   // Estados para armazenar transações, total de renda e total de despesas
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions')) || []
  );
  const [totalIncome, setTotalIncome] = useState(
    JSON.parse(localStorage.getItem('totalIncome')) || 0
  );
  const [totalExpense, setTotalExpense] = useState(
    JSON.parse(localStorage.getItem('totalExpense')) || 0
  );

   // Funções para calcular o total de despesas e renda
  const calculateTotalExpense = () => {
    const expenses = transactions.filter((t) => t.type === 'expense');
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalExpense(total);
  };

  const calculateTotalIncome = () => {
    const incomes = transactions.filter((t) => t.type === 'income');
    const total = incomes.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalIncome(total);
  };

   // Adiciona uma transação à lista de transações
  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

   // Remove uma transação da lista de transações e atualiza os totais
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

  // Atualiza os totais de renda, despesa e armazena no localStorage quando as transações mudam
  useEffect(() => {
    calculateTotalIncome();
    calculateTotalExpense();

    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('totalIncome', JSON.stringify(totalIncome));
    localStorage.setItem('totalExpense', JSON.stringify(totalExpense));
  }, [transactions, totalIncome, totalExpense]);

  // Calcula o saldo total (renda - despesa)
  const getTotalBalance = () => {
    return totalIncome - totalExpense;
  };

   // Renderização do componente App
  return (
  
      <div className="center">
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

export default App; // Exporta o componente App
