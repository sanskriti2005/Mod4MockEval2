import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Button } from "@chakra-ui/react";
import app from "./firebase/firebaseConfig";
import { logOut } from "./redux/actions";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleSignOut = async () => {
    dispatch(logOut());
  };
  return (
    <>
      {user ? (
        <div>
          <Button onClick={handleSignOut}>Logout</Button>
          <NoteForm />
          <NoteList />
        </div>
      ) : (
        <div>
          <Login />
          <Button onClick={handleSignOut}>Logout</Button>
        </div>
      )}
    </>
  );
}

export default App;
