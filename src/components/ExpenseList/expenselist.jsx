import React from 'react';
import './ExpenseList.css'; // Importe o arquivo de estilos

const ExpenseList = ({ transactions, totalExpense, onDeleteTransaction }) => {
  const handleDelete = (index) => {
    onDeleteTransaction(index, transactions[index].amount, 'expense');
  };

  return (
    <div className="expense-list-container">
      <h2>Despesas</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name}: R$ {transaction.amount}
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
      <p>Total de Despesas: R$ {totalExpense}</p>
    </div>
  );
};

export default ExpenseList;
