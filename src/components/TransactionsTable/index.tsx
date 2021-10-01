import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: 'deposit' | 'withdrawal';
    category: string;
    createAt: Date;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get<Transaction[]>('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data));
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type === 'deposit' ? 'deposit' : 'withdraw'}>R$ {transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}