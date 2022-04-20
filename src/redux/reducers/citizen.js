const initialState= {
    currentUser: null
}

export const citizen= (state= initialState, action)=> {
    return{
        ...state,
        currentUser: action.currentUser
    }
}