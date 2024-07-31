import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MyVerticallyCenteredModal from './UpdateTask';

import { removeFromList,completedTask } from './Slice/TaskSlice';
import { setSelectedTask } from './Slice/TaskSlice';

function ReadTask(){
    
    const {taskList}=useSelector((state)=>state.tasks)
    const dispatch=useDispatch()


    const updateTask=(task)=>{
        console.log("Task updated");
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }
    const deleteTask=(task)=>{
        dispatch(removeFromList(task))
    }
    const completed=(task)=>{
      dispatch(completedTask(task))
    }


    const [modalShow,setModalShow]=useState(false)

    
    return(
        <>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          taskList && taskList.map((task,index)=>{
            return(
        <tr key={task.id}>
          <td>{index+1}</td>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>
          <Button variant="secondary" 
            onClick={()=>updateTask(task)} disabled={task.complete}
          ><i className="bi bi-pen"></i></Button>||  
          <Button variant="danger"
             onClick={()=>deleteTask(task)}
          ><i className="bi bi-trash"></i></Button>||
          <Button variant="success"
             onClick={()=>completed(task)} disabled={task.complete}
          ><i className="bi bi-check"></i></Button>
          </td>
       </tr>
          )
         })
        }
      </tbody>
    </Table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    );
}
export default ReadTask;