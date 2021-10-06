import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: 'deposit' | 'withdrawal';
    category: string;
    createdAt: Date;
}

interface ResponseTransaction {
    transactions: Transaction[];
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get<ResponseTransaction>('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data.transactions));
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
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}