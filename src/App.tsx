import React,{useState} from 'react';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';


function App() {
  const [notes, setNotes] = useState<Note[]>([{

      id: (new Date).toString(), 
      title: 'Meetings', 
      text: 'Meeting with UI/UX team', 
      color: '#dfdfdf', 
      date: (new Date).toString()
     }]);

  
  return (<>
    <Header/>
    <Container className='mt-5'>
    <Row>
      <Col>
          <CreateNotes notes ={notes} setNotes={setNotes}/>
          <NotesList notes ={notes} setNotes={setNotes}/>
      </Col>
    </Row>
  </Container>
    
  </>);
}

export default App;
