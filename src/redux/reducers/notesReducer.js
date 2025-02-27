import { ADD_NOTE, DELETE_NOTE, NOTES_ERROR, NOTES_FETCH_SUCCESS, NOTES_LOADING } from "../actions";

const initState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesReducer = (state=initState, action) => {
    switch(action.type){
        case NOTES_LOADING:
            return {...state, loading: action.payload}
        case NOTES_FETCH_SUCCESS:
            return {...state, notes: action.payload}
        case NOTES_ERROR:
            return {...state, error: action.payload}
        case DELETE_NOTE:
            let updatesNotes = state.notes.filter((note) => note.id != action.payload && note);
            return {...state, notes: updatesNotes}
        case ADD_NOTE:
            return {...state, notes: [...state.notes, action.payload]}
        default:
            return state
    }
}
