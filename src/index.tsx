import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
					id: 1,
					title: 'Desenvolvimento de sistema de upload de fotos',
					category: 'Freelancer',
					amount: '1500',
					type: 'deposit',
					createdAt: new Date('2021-08-14 09:10:05')
				},
				{
					id: 2,
					title: 'Aluguel de casa',
					category: 'Casa',
					amount: '500',
					type: 'withdraw',
					createdAt: new Date('2021-08-15 14:30:05')
				}
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
