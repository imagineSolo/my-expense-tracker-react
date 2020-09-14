export default (state, action) => {
    switch(action.type) {
        case 'FETCH_CURRENCY':
            return {
			    ...state,
				currencies: action.payload,
            }
        case 'SET_CURRENCY':
            return {
				...state,
				currentCurrency: action.payload,
			}
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
        case 'ADD_GOAL':
                return {
                    ...state,
                    goal: action.payload
                }
        default: 
            return state;
    }
}