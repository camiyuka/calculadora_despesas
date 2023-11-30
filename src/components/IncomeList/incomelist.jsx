import React from 'react';
import './IncomeList.css'; // Importação do arquivo de estilos

const IncomeList = ({ transactions, totalIncome, onDeleteTransaction }) => {
   // Função para lidar com a exclusão de uma transação de receita
  const handleDelete = (index) => {
     // Chama a função onDeleteTransaction passando o índice, o valor da transação e o tipo ('income')
    onDeleteTransaction(index, transactions[index].amount, 'income');
  };
  
  // Renderização do componente
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

export default IncomeList; // Exporta o componente IncomeList
