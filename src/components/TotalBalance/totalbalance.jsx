import React from 'react';

const TotalBalance = ({ totalBalance }) => {
  return (
    <div>
      <h2>Soma Total na Carteira</h2>
      <p>Total: R$ {totalBalance}</p>
    </div>
  );
};

export default TotalBalance;
