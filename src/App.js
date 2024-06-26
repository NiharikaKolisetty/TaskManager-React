import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {

  const[taskList, setTaskList] = useState([]);
  const[edittask, setEdittask] = useState({});
  return (
    <div className='App'>
    <Header/>
    <AddTask 
    taskList={taskList} 
    setTaskList={setTaskList}
    edittask={edittask}
    setEdittask={setEdittask}/>
    <ShowTask taskList={taskList} 
    setTaskList={setTaskList}
    edittask={edittask}
    setEdittask={setEdittask}/>
    </div>
  );
}

export default App;
