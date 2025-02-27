import axios from "axios";

export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS";
export const NOTES_LOADING = "NOTES_LOADING";
export const NOTES_ERROR = "NOTES_ERROR";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGOUT = "LOGOUT";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


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

export const deleteNote = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://mod4mockeval2-default-rtdb.firebaseio.com/notes/${id}.json`
    );
    dispatch({ type: DELETE_NOTE, payload: id });
    alert("Note succefully deleted");
  } catch (error) {
    console.log(error);
  }
};

export const editNote = (obj) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `https://mod4mockeval2-default-rtdb.firebaseio.com/notes/${obj.id}.json`,
      obj
    );
    dispatch({ type: EDIT_NOTE, payload: obj });
    alert("Note succefully edited!");
  } catch (error) {
    console.log(error);
  }
};

export const loginSucces = () => async (dispatch) => {
  try {
    const res = await signInWithPopup(auth, provider);
    alert('login sucess!')
    dispatch({type: LOGIN_SUCESS, payload:res.user});
  } catch (error) {
    console.log(err);
  }
};

export const logOut = () => async (dispatch) => {
  try {
    const res = await signOut(auth);
    dispatch({type:LOGOUT})
  } catch (error) {
    console.log(error);
  }
}
