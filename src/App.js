import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Input from './components/InputToDo/inputtodo'
import TodoList from './components/ToDoList/todolist'
import "./App.css"


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>
          TODO APP
        </h1>
      </header>
      <main className="container">
      <Input/>
      <TodoList/>
      </main> 
    </div>
    </Provider>
  );
}

export default App;
