import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const [date, setDate] = useState(new Date());

	const { addTransaction, transactions } = useContext(GlobalContext);

	const handleDateChange = (date) => {
		setDate(date);
	};

	const onTransactionSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount,
			date
		};

		addTransaction(newTransaction);
	};

	useEffect(() => {
		window.localStorage.setItem('transactions', JSON.stringify(transactions));
	}, [transactions]);

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<div className='new-transaction'>
				<h3>Add new transaction</h3>
				<form onSubmit={onTransactionSubmit}>
					<div className='form-control'>
						<label htmlFor='text'>Text</label>
						<input
							type='text'
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder='Enter text...'
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
					<div className='form-control'>
						<KeyboardDatePicker
							margin='normal'
							id='date-picker-dialog'
							label='Tansaction date'
							format='dd/MM/yyyy'
							value={date}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</div>
					<button className='btn-new'>Add transaction</button>
				</form>
			</div>
		</MuiPickersUtilsProvider>
	);
};
