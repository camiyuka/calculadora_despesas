import React from 'react';
import './TotalBalance.css'; // Importação do arquivo de estilos

// Componente TotalBalance que recebe a prop totalBalance
const TotalBalance = ({ totalBalance }) => {
  // Renderização do componente
  return (
    <div className="total-balance-container">
      <h2>Soma Total na Carteira</h2>
      <p>Total: R$ {totalBalance}</p>
    </div>
  );
};

export default TotalBalance;  // Exporta o componente TotalBalance
