import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';

export default function TodoItem({listdata,toggleComplete, handleDelete,findSingleValue}) {


  const listedItems= listdata.map((list)=>{
    return(
    <div className="container w-80 mb-2" key={list.id}>
  <div className="row border border-dark align-items-center bg-secondary text-light" >
    <div className="col-1">
      <input type="checkbox" onClick={()=>toggleComplete(list.id)} />
    </div>
    <div className="col-9 font-weight-bold paraline"> 
      <p className = {`${list.isCompleted ? 'complete paraline':"paraline"}`} >{list.todo}</p>
    </div>
    <div className="col-1 p-1">
      <EditIcon onClick ={()=>findSingleValue(list.id)} />
    </div>

    <div className="col-1 p-1">
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
