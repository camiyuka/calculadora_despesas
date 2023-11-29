import React from 'react';

const IncomeList = ({ transactions, totalIncome, onDeleteTransaction }) => {
  const handleDelete = (index) => {
    onDeleteTransaction(index, transactions[index].amount, 'income');
  };

  return (
    <div>
      <h2>Receitas</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name}: R$ {transaction.amount}
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
      <p>Total de Receitas: R$ {totalIncome}</p>
    </div>
  );
};

export default IncomeList;
