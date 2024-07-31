import { createSlice } from '@reduxjs/toolkit'

const initialState={
    taskList:[],
    selectedTask:{}
}

export const TaskSlice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
   
     addTaskToList:(state,action)=>{
        const id=Math.random() * 1000
        let task={...action.payload,id}
        state.taskList.push(task)
     },
     removeFromList:(state,action)=>{
        state.taskList=state.taskList.filter((task)=>task.id!==action.payload.id)
     },
     updateTaskList:(state,action)=>{
        state.taskList=state.taskList.map((task)=>task.id===action.payload.id?action.payload:task)
     },
     setSelectedTask:(state,action)=>{
        state.selectedTask=action.payload
     },
     completedTask:(state,action)=>{
      state.taskList.map((task)=>{
         if(task.id===action.payload.id)
         {
            task.complete=true
         }
      })
     }



  }
})
export const {addTaskToList,removeFromList,updateTaskList,setSelectedTask,completedTask}=TaskSlice.actions
export default TaskSlice.reducer;