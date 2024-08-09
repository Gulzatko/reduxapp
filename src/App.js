import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from './store/todoSlice';
import TodoList from './Components/TodoList';
import InputField from './Components/InputField'; 
import './App.css';

 function App() {
   const [text,setText]= useState('');
   const dispatch = useDispatch();
  
   const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
   };
 

 return (
    <div className="App">
     <InputField  
     text={text} 
     handleInput={setText} 
     handleSubmit={addTask}
     />

      <TodoList  />
      </div>
  );
}
 


export default App;
