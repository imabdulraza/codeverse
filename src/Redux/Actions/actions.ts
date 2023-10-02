export const increment = (count: number) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}