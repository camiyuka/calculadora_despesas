import React from 'react';

const IncomeList = ({ transactions, totalIncome }) => {
  return (
    <div>
      <h2>Receitas</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name}: R$ {transaction.amount}
          </li>
        ))}
      </ul>
      <p>Total de Receitas: R$ {totalIncome}</p>
    </div>
  );
};

export default IncomeList;
