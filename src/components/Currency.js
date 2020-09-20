import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Currency = () => {

	const { currencies, currentCurrency, setCurrency, setRate } = useContext(GlobalContext);

    	const onCurrencySelect = (e) => {
			const {value} = e.target;

			const selected = currencies.filter(curr => curr[0] === value)

			setCurrency(value);
			setRate(selected[0][1])
		};

    return (
			<div className='currency'>
				Current curency:
				<select
					value={currentCurrency}
					onChange={(e) =>
						onCurrencySelect(e)
					}
				>
					{currencies.map((option) => (
						<option
							key={option[1]}
							value={option[0]}
						>
							{option[0]}
						</option>
					))}
				</select>
			</div>
		);
}
