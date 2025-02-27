import { ADD_NOTE } from "../actions";

const initState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesReducer = (state=initState, action) => {
    switch(action.type){
        case ADD_NOTE:
            return {...state, notes: [...state.notes, action.payload]}
        default:
            return state
    }
}
