import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const Transactions = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <div className='history'>
            <h3>Transaction History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}
