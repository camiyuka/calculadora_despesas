import React from 'react';
import './IncomeList.css'; // Importe o arquivo de estilos

const IncomeList = ({ transactions, totalIncome, onDeleteTransaction }) => {
  const handleDelete = (index) => {
    onDeleteTransaction(index, transactions[index].amount, 'income');
  };

  return (
    <div className="income-list-container">
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
