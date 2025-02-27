import { addNotes } from "../redux/actions";
import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const handleAddNote = async (note) => {
    dispatch(addNotes({ note }));
    setNote("");
  };
  return (
    <HStack>
      <Input
        type="text"
        placeholder="Enter your note"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <Button onClick={() => handleAddNote(note)}>Add Note</Button>
    </HStack>
  );
};

export default NoteForm;
