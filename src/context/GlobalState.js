import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
const storedGoal = JSON.parse(localStorage.getItem('goal')) || [];

const initialState = {
    transactions: storedTransactions,
    goal: storedGoal,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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
        deleteTransaction,
        addTransaction,
        addGoal,
    }}>
        {children}
    </GlobalContext.Provider>)
}

