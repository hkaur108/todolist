import React from 'react';
import TodoItem from './TodoItem'
import "bootstrap/dist/css/bootstrap.min.css";

import '../App.css';

export default function TodoList({listdata, toggleComplete,handleDelete,removeAll,findSingleValue}) {
  return (
    <div className='todoListWrapper p-4 m-4'>
      <TodoItem listdata={listdata} toggleComplete={toggleComplete} handleDelete={handleDelete} removeAll={removeAll} findSingleValue={findSingleValue}/>

    </div>
  )
}
