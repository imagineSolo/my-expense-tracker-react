import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const { addTransaction, transactions } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    useEffect(() => {
        window.localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions]);

    return (
        <div className='new-transaction'>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <input type="number"  value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn-new">Add transaction</button>
            </form>
        </div>
    )
}
