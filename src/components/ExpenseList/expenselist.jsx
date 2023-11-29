import React from 'react';

const ExpenseList = ({ transactions, totalExpense, onDeleteTransaction }) => {
  const handleDelete = (index) => {
    onDeleteTransaction(index, transactions[index].amount, 'expense');
  };

  return (
    <div>
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
