import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import '../App.css';
import TodoList from './TodoList';
import uuid4 from "uuid4";




export default function TodoInput() {

    const [value,setvalue] = useState("");
    const [listdata,setlistdata] =useState([]);



    const handleClick =() =>{

        if(!value){
            alert("Please entry the todo!")
        }
        else{
            setlistdata([...listdata, {id:uuid4(),todo:value,isCompleted:false,isEditing:false,isdeleting:false}])

        }

        setvalue("")
        console.log(listdata)
    }

    const toggleComplete =(id) =>{
        const toggledData = listdata.map((item)=>{
            return(
                item.id===id?{...item, isCompleted:!item.isCompleted}:item
            )

        })
        setlistdata(toggledData)

    }

    const handleDelete =(id)=>{
        const deletedData= listdata.filter((item)=>{
            return(
                item.id!==id
            )
        })

        setlistdata(deletedData)

    }


    const findSingleValue= (id)=>{

        console.log(id)

        const x=listdata.filter((item)=>{
            return(
                item.id!==id
            )
        })
        setlistdata(x)
        
        const singleVal= listdata.find((item)=>{
            return(
                item.id===id 
            )
        })

        // console.log(listdata)
        // console.log(singleVal)
        
    setvalue(singleVal.todo)
    

        
    }

    const removeAll =()=>{
        
        setlistdata([])
    }



return (
    <>
    <div className='wrapper border border-dark mt-3 w-100'>
    
    
    {/* header formatting */}
     <div className='d-flex   mx-auto mt-5 p-3 '>
        {/* first child */}
        <div className=' heading text-light px-5 py-1 justify-center text-capitalize text-center align-self-center '> 
        <h3 className='font-weight-bold display-5 font-weight-bold'>todo list </h3>
        </div>
    </div>




    {/* input formating */}

    <div className="input-group mb-3 mt-3 input-container">
        <div className="input-group-prepend my-auto">
    <span className="input-group-text bg-primary text-light icon"><LibraryBooksIcon/></span>
  </div>
        <input type="text" className="form-control text-capitalize mx-auto font-size-2rem" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="Enter your todo"/>
        <div className="input-group-append">
            <span className="input-group-text"><button className='btn btn-primary ' type='click' onClick={handleClick}>+</button></span>
        </div>
    </div>

    <TodoList listdata={listdata} toggleComplete={toggleComplete} handleDelete={handleDelete}  removeAll={removeAll} findSingleValue={findSingleValue}/>
    {(listdata.length>0) && (<div className='btn-container'> <button onClick={removeAll} className='btn-child btn btn-primary text-capitalise'>remove all</button></div>)}


    </div>
    </>
)
}