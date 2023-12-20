import React, { useState, useEffect } from "react";
import Header from './Components/Header';
import InputSection from './Components/InputSection';
import TaskItem from './Components/TaskItem';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [inputValue, setInput] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then(response => response.json())
      .then(data => {
        if (data && data[0]) {
          setData([{ task: data[0] }]);
        }
      })
      .catch(error => console.error("Error fetching random word:", error));
  }, []); 

  const handleValue = (event) => {
    setInput(event.target.value);
  };

  const saveData = () => {
    if (editIndex !== null) {
      const newData = [...data];
      newData[editIndex] = { task: inputValue };
      setData(newData);
      setEditIndex(null);
    } else {
      setData([...data, { task: inputValue }]);
    }

    setInput('');
  };

  const startEdit = (index) => {
    const taskToEdit = data[index];
    setInput(taskToEdit.task);
    setEditIndex(index);
  };

  const removeTask = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData([...newData]);
    setEditIndex(null);
  };

  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InputSection inputValue={inputValue} handleValue={handleValue} saveData={saveData}/>
                <div className="items">
                  {data.length === 0 ? (
                    <h1 id='note'>No tasks</h1>
                  ) : (
                    data.map((elem, index) => (
                      <TaskItem key={index} task={elem.task} startEdit={startEdit} removeTask={removeTask} index={index} />
                    ))
                  )}
                </div>
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
