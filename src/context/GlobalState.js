import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'

const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
const storedGoal = JSON.parse(localStorage.getItem('goal')) || [];

const initialState = {
    transactions: storedTransactions,
    goal: storedGoal,
    currencies: [],
    currentCurrency: "PLN",
    currentRate: 1,
}

const BASE_URL = `https://api.exchangeratesapi.io/latest?base=${initialState.currentCurrency}`;

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        fetch(BASE_URL)
					.then((response) => response.json())
					.then((data) =>
						fetchCurrencyRates([
							...Object.entries(data.rates),
						])
					);
    }, [])

    function fetchCurrencyRates(data) {
        dispatch({
            type: 'FETCH_CURRENCY',
            payload: data
        })
    }

    function setCurrency(value) {
        dispatch({
            type: 'SET_CURRENCY',
            payload: value
        })
    }

        function setRate(rate) {
			dispatch({
				type: 'SET_RATE',
				payload: rate
			});
		}

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function addGoal(goal) {
        dispatch({
            type: 'ADD_GOAL',
            payload: goal
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        goal: state.goal,
        currencies: state.currencies,
        currentCurrency: state.currentCurrency,
        fetchCurrencyRates,
        setCurrency,
        setRate,
        deleteTransaction,
        addTransaction,
        addGoal,
    }}>
        {children}
    </GlobalContext.Provider>)
}

