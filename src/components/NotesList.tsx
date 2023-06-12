import * as React from 'react';
import { Note } from './../models/note.model';
import Notes from './Notes';



interface INotesListProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

const NotesList: React.FC<INotesListProps> = ({notes,setNotes}) => {

  const handleDelete=(id: string) => {
    setNotes(notes.filter(note=>note.id !== id))
      // console.log('note id to be deleted', id);
  };

  const renderNotes=():JSX.Element[]=>{
    return notes.map(note=>{
      return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
    })
  }

  return(<>
    <h2 className='my-5'>Notes List</h2>
   <div className="">{renderNotes()}</div> 
   </>);
};

export default NotesList;

//tsrsfc