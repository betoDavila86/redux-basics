const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 5
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - 5
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            const newArray = state.results.filter(result => result.id !== action.resultId)
            return {
                ...state,
                results: newArray
            }
        default:
            return state;
    }
}
export default reducer;