import React from 'react';
import './TotalBalance.css'; // Importe o arquivo de estilos

const TotalBalance = ({ totalBalance }) => {
  return (
    <div className="total-balance-container">
      <h2>Soma Total na Carteira</h2>
      <p>Total: R$ {totalBalance}</p>
    </div>
  );
};

export default TotalBalance;
