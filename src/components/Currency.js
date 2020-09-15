import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Currency = () => {

	const { currencies, currentCurrency, setCurrency, setRate } = useContext(GlobalContext);

    	const onCurrencySelect = (value, rate) => {
			console.log(rate)
			setCurrency(value);
			setRate(rate)
		};

    return (
			<div>
				Current curency:
				<select
					onChange={(e) =>
						onCurrencySelect(e.target.value, e.target.getAttribute("data-rate"))
					}
				>
					{currencies.map((option) => (
						<option
							key={option[1]}
							data-rate={option[1]}
							value={option[0]}
							selected={option[0] === currentCurrency ? true : false}
						>
							{option[0]}
						</option>
					))}
				</select>
			</div>
		);
}
