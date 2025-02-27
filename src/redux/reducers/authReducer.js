import { LOGIN_SUCESS, LOGOUT } from "../actions"

const initState = {
    user: JSON.parse(localStorage.getItem('user') || null),
    loading: false,
    error: null,
}

export const authReducer = (state=initState, action) => {
    switch(action.type){
        case LOGIN_SUCESS:
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {...state, user: action.payload}
        case LOGOUT:
            localStorage.removeItem("user")
            return {...state, user: null}
        default:
            return state
    }
}