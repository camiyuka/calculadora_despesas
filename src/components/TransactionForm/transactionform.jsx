import React, { useState } from 'react';
import './TransactionForm.css'; // Importe o arquivo de estilos

const TransactionForm = ({ onAddTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      name,
      amount: Number(amount),
      type,
      paymentMethod,
    };
    onAddTransaction(newTransaction);
    setName('');
    setAmount('');
  };

  return (
   
    <form className="transaction-form" onSubmit={handleSubmit}>
       <h1> Cadastro</h1>
      <div className="input-group">
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Valor" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="radio-group">
        <label>
          Receita:
          <input type="radio" value="income" checked={type === 'income'} onChange={() => setType('income')} />
        </label>
        <label>
          Despesa:
          <input type="radio" value="expense" checked={type === 'expense'} onChange={() => setType('expense')} />
        </label>
      </div>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="cash">Dinheiro</option>
        <option value="credit">Cartão de Crédito</option>
        <option value="debit">Cartão de Débito</option>
        <option value="pix">Pix</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TransactionForm;
