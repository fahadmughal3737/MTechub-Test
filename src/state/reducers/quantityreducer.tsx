export const QuantityReducer = (state=0, action:any) =>{
    if(action.type==='increment'){
        return state +action.payload
    }
    else if (action.type==='decrement'){
        return state - action.payload
    }
    else {
        return state
    }
}