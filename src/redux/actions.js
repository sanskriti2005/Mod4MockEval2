import axios from "axios";

export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS";
export const NOTES_LOADING = "NOTES_LOADING";
export const NOTES_ERROR = "NOTES_ERROR";
export const ADD_NOTE = "ADD_NOTE";

export const fetchNotes = () => async (dispatch) => {
  try {
    dispatch({ type: NOTES_LOADING, payload: true });
    const res = await axios
      .get("https://mod4mockeval2-default-rtdb.firebaseio.com/notes.json")
      .finally(dispatch({ type: NOTES_LOADING, payload: false }));
    const data = await res.data;

    //   convert the data into an array of objects
    const array = Object.entries(data).map(([key, value]) => {
      return { id: key, ...value };
    });
    dispatch({ type: NOTES_FETCH_SUCCESS, payload: array });
  } catch (error) {
    dispatch({ type: NOTES_ERROR, payload: error.message });
    console.log(error);
  }
};

export const addNotes = (noteObj) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://mod4mockeval2-default-rtdb.firebaseio.com/notes.json",
      noteObj
    );
    alert("Note succefully added!");
    dispatch({
      type: ADD_NOTE,
      payload: { id: res.data.name, note: noteObj.note },
    });
  } catch (error) {}
};
