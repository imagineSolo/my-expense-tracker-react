import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ProgressBar } from './ProgressBar';

export const Goal = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { transactions, currentCurrency, addGoal, goal } = useContext(GlobalContext);

	const onGoalSubmit = (e) => {
		e.preventDefault();

		const newGoal = {
			text,
			amount: +amount,
		};

		addGoal(newGoal);
	};

	useEffect(() => {
		window.localStorage.setItem('goal', JSON.stringify(goal));
	}, [goal]);

	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0);

	const percentage = ((total / goal.amount) * 100).toFixed(2);

	return (
		<div className='goal'>
			<h3>Your Goal</h3>
			<form className='goal-form' onSubmit={onGoalSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Goal name...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='Enter amount...'
					/>
				</div>
				<button className='btn-goal'>Add</button>
			</form>
			<div className='goal-progress'>
				<div className='goal-info'>
					<div>
						Current goal: <span>{goal.text}</span>
					</div>
					<div>
						Amount to collect: <span>{goal.amount} {currentCurrency}</span>
					</div>
				</div>
				<ProgressBar value={percentage} size={80} />
			</div>
		</div>
	);
};
