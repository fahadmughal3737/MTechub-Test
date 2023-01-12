export const increment = (quantity: number) => {
    return (dispatch: any) => {
        dispatch({
            type: 'increment',
            payload: quantity
        })

    }
}
export const decrement = (quantity: number) => {
    return (dispatch: any) => {
        dispatch({
            type: 'decrement',
            payload: quantity
        })

    }
}