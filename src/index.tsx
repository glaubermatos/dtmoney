import React from 'react';
import ReactDOM from 'react-dom';

import { createServer } from 'miragejs'

import { App } from './App';

createServer({
  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento do site Oasis Contabilidade',
          amount: 1200,
          type: 'deposit',
          category: 'Freela',
          createAt: new Date()
        },
        {
          id: 2,
          title: 'Assinatura Ignite - Rocketseat',
          amount: 57,
          type: 'withdrawal',
          category: 'Capacitação',
          createAt: new Date()
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 600,
          type: 'withdrawal',
          category: 'Casa',
          createAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
