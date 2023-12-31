//tsrsfc
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Note } from './../models/note.model';



interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

const CreateNotes: React.FC<ICreateNotesProps> = ({notes, setNotes}) => {
  const [error, setError] = React.useState<string>('');

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  // console.log(titleRef );
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

 

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>) :void => {
    e.preventDefault();

    if(titleRef.current?.value === "" || textRef.current?.value === ""){
        return setError("All fields are required");
    }

    setError('');
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text:  (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString(),
    }
    ]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";

  };

  return (<>
    <h2 className='mt-5'>Create Notes</h2>
  <Form className='my-5' onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group className="mb-3 " controlId="formBasicTitle">
        <Form.Label className='h3 mt-3'>Title: </Form.Label>
        <Form.Control ref={titleRef}
        type="text" placeholder="Enter Title For The Note" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='h3 mt-3'>Text: </Form.Label>
        <Form.Control ref={textRef}
         as='textarea' rows={3} type="text" placeholder="Enter Your Note..." />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor='colorInput'  className='h3 mt-3'>Notes Color: </Form.Label>
        <Form.Control ref={colorRef}
        defaultValue='#dfdfdf' type="color" id="colorInput"  title="choose your color"/>
     
      </Form.Group>

      <Button
      variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </>);
};

export default CreateNotes;
