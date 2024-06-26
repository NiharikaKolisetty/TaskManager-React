import React from 'react';

const AddTask = ({ taskList, setTaskList, edittask, setEdittask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edittask.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) =>
        todo.id === edittask.id ? { id:edittask.id, name: edittask.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
      );
      setTaskList(updatedTaskList);
      setEdittask({}); // Reset edittask after update
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: edittask.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTaskList([...taskList, newTask]);
      setEdittask({});
    }

    
  };

  const handleInputChange = (e) => {
    setEdittask({ ...edittask, name: e.target.value }); // Update edittask.name on input change
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          name="task"
          value={edittask.name || ""}
          autoComplete="off"
          maxLength={25}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTask;
