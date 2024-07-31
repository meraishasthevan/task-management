import React, { useState } from 'react';
import { addTaskToList } from './Slice/TaskSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

function AddTask(){
    const dispatch=useDispatch()
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")

    const addTask=(e)=>{
        e.preventDefault()
        console.log(title,description);
        dispatch(addTaskToList({title,description,complete:false,}))
        setTitle("")
        setDescription("")
    }
    return(
        <div>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Name"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
        
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Task description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </Form.Group>

      <div className="d-grid">
      <Button variant="secondary" size="lg" 
       onClick={(e)=>addTask(e)}
      >
        Add New Task
      </Button>
      </div>
    </Form>
        </div>
    );
}
export default AddTask;