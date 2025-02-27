import { Container, Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { deleteNote, editNote, fetchNotes } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NoteList = () => {
  const { notes, loading, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editVal, setEditVal] = useState(null);

  const handleSetEdit = (id, note) => {
    setEditId(id);
    setEditVal(note);
  };

  const handleSaveEditedChanges = (newVal, prevVal, id) => {
    if (newVal == prevVal) {
      setEditId(null);
      setEditVal(null);
    } else {
      dispatch(editNote({ id, note: newVal }));
      setEditId(null);
      setEditVal(null);
    }
  };
  useEffect(() => {
    dispatch(fetchNotes());
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : notes.length > 0 ? (
        <VStack gap={4}>
          {notes.map((note) => {
            return (
              <Box key={note.id}>
                {editId != note.id ? (
                  <VStack padding={8} height={'200px'} width={'500px'} textAlign={'center'} justify={'space-between'} border={'2px solid white'}>
                    <Text>{note.note}</Text>
                    <HStack justify={'space-between'}>
                    <Button onClick={() => dispatch(deleteNote(note.id))}>
                      Delete
                    </Button>
                    <Button onClick={() => handleSetEdit(note.id, note.note)}>
                      Edit
                    </Button>
                    </HStack>
                  </VStack>
                ) : (
                  <Box>
                    <input
                      type="text"
                      value={editVal}
                      onChange={(e) => setEditVal(e.target.value)}
                    />
                    <Button
                      onClick={() =>
                        handleSaveEditedChanges(editVal, note.note, note.id)
                      }
                    >
                      Save changes
                    </Button>
                  </Box>
                )}
              </Box>
            );
          })}
        </VStack>
      ) : (
        <h2>No notes</h2>
      )}
    </div>
  );
};

export default NoteList;
