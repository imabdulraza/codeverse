const counterReducer = (state = 0, action: { type: string, payload: number }) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 5;
        default:
            return state;
    }
}

export default counterReducer;