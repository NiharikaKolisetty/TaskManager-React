import React from 'react';

const ShowTask = ({ taskList, setTaskList ,edittask,setEdittask}) => {
  const handleClearAll = () => {
    setTaskList([]);
  };

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(newTaskList)
  }
  const handleEdit = (id) => {
    const selectedTask = taskList.find(todo=>todo.id===id);
    setEdittask(selectedTask);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">ToDo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={handleClearAll} className="clearAll" >ClearAll</button>
      </div>
      <hr/>
      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i  onClick={()=>handleEdit(todo.id)} className="bi bi-pen pen-icon"></i>
            <i onClick={()=>handleDelete(todo.id)}className="bi bi-trash trash-icon"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
