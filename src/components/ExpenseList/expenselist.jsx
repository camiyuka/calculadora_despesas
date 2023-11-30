import React from 'react';
import './ExpenseList.css'; // Importa o arquivo de estilos

// Componente ExpenseList que recebe props: transactions, totalExpense e onDeleteTransaction
const ExpenseList = ({ transactions, totalExpense, onDeleteTransaction }) => {
  // Função para lidar com exclusão de transação
  const handleDelete = (index) => {
    // Chama a função onDeleteTransaction passando o índice, o valor da transação e o tipo ('expense')
    onDeleteTransaction(index, transactions[index].amount, 'expense');
  };

  // Renderização do componente
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

export default ExpenseList; // Exporta o componente ExpenseList
