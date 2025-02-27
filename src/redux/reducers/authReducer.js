const initState = {
    user: JSON.parse(localStorage.getItem('user') || null),
    loading: false,
    error: null,
}

export const authReducer = (state=initState, action) => {
    switch(action.type){
        default:
            return state
    }
}