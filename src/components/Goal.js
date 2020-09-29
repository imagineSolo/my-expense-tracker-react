import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ProgressBar } from './ProgressBar';
import { Message } from './Message'

export const Goal = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState('');

	const { transactions, currentCurrency, currentRate, addGoal, goal } = useContext(GlobalContext);

	const onGoalSubmit = (e) => {
		e.preventDefault();
		// eslint-disable-next-line eqeqeq
		if (amount == 0) {
			return
		} else {
		const newGoal = {
			text,
			amount: +amount,
		};

		addGoal(newGoal);
	}};

	useEffect(() => {
		window.localStorage.setItem('goal', JSON.stringify(goal));
	}, [goal]);

	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0);

	const percentage = parseFloat(((total / goal.amount) * 100).toFixed(2));

	const amountToCollect = parseFloat((goal.amount * currentRate).toFixed(2));

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
						maxLength='15'
						required
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='Enter amount...'
						required
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
						Amount to collect:{' '}
						<span>
							{amountToCollect > 0 ? amountToCollect : 0} {currentCurrency}
						</span>
					</div>
				</div>
				<ProgressBar
					value={percentage > 0 ? percentage : 0}
					size={80}
					amount={amount}
				/>
			</div>
			{<Message percentage={percentage} amount={amount} />}
		</div>
	);
};
