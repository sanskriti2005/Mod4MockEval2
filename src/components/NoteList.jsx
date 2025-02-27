import { Container, Box, Text, Button } from "@chakra-ui/react";
import { deleteNote, fetchNotes } from "../redux/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NoteList = () => {
  const { notes, loading, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNotes())
  }, []);
  return <div>
    {
      loading ? 
      <h2>Loading...</h2>
      : notes.length > 0 ? 
      <Container>
        {
          notes.map((note) => {
            return(
              <Box key={note.id}>
                <Text>{note.note}</Text>
                <Button onClick={() => dispatch(deleteNote(note.id))}>Delete</Button>
                <Button>Edit</Button>
              </Box>
            );
          })
        }
      </Container>
      : <h2>No notes</h2>
    }
  </div>;
};

export default NoteList;
