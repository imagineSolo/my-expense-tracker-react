import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction, currentCurrency, currentRate } = useContext(GlobalContext);

    return (
			<li className={transaction.amount > 0 ? 'plus' : 'minus'}>
				{transaction.text}
				<span>{new Date(transaction.date).toLocaleDateString('pl-PL')}</span>
			<span>{(transaction.amount * currentRate).toFixed(2)} {currentCurrency}</span>
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className='delete-btn'
				>
					x
				</button>
			</li>
		);
}
