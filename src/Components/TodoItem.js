import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';

export default function TodoItem({listdata,toggleComplete, handleDelete,findSingleValue}) {



  
  const listedItems= listdata.map((list)=>{
    return(


      
    <div className="container border border-dark w-90  mb-3"key={list.id}>




  <div className="row border border-dark align-items-center bg-secondary text-light" >
    <div className="col-1  ">
      <input className=''   type="checkbox" onClick={()=>toggleComplete(list.id)} />
    </div>
    <div className="col-9 font-weight-bold "> 
      <p className = {`${list.isCompleted ? 'complete':""}`} >{list.todo}</p>
    </div>
    <div className="col-1 ">
      <EditIcon onClick ={()=>findSingleValue(list.id)} />
    </div>

    <div className="col-1">
      <DeleteIcon onClick={()=>handleDelete(list.id)}/>
    </div>

    
  </div>


  

</div>
    )
  })
  return (
    <div>
      {listedItems}
    </div>
  )
}
