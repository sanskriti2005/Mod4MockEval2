import axios from "axios";

export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS";
export const NOTES_LOADING = "NOTES_LOADING";
export const NOTES_ERROR = "NOTES_ERROR";
export const ADD_NOTE = "ADD_NOTE";

export const fetchNotes = () => async (dispatch) => {};

export const addNotes = (noteObj) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://mod4mockeval2-default-rtdb.firebaseio.com/notes.json",
      noteObj
    );
    alert('Note succefully added!')
    dispatch({
      type: ADD_NOTE,
      payload: { id: res.data.name, note: noteObj.note },
    });
  } catch (error) {}
};
