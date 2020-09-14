import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Currency = () => {

    const { currencies, setCurrency } = useContext(GlobalContext);

    	const onCurrencySelect = (e) => {
				// e.preventDefault();

				setCurrency(e);
			};

    return (
			<div>
				Current curency:
				<select onChange={(e) => onCurrencySelect(e.target.value)}>
					{currencies.map((option) => (
						<option key={option} value={option}>{option}</option>
					))}
				</select>
			</div>
		);
}
