import { useState } from 'react';
import './App.css';
// import { InputForm } from './components/InputForm'

function App() {
  const header = {
    padding: '20px',
    backgroundColor: 'orange',
    textAlign: 'left'
  }

  const labelStyle = {
    marginRight: "20px",
    fontWeight: 'bold',
    fontSize: '30px',
  };

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState('');


  const handleChange = event => {
    setTodo(event.target.value);
    console.log(todo)
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todo.trim(),
      }
    ])

    setTodo('');
  }

  const handleDeleteTodo = (id) => {
    const restTodo = [...todos];
    restTodo.splice(id - 1, 1);
    setTodos(restTodo);
  }

  const handleEditTodo = (todo) => {
    setIsEdit(true);
    setCurrentTodo({ ...todo })
  }

  const handleEditInputChange = (event) => {
    setCurrentTodo({ ...currentTodo, title: event.target.value });
  }

  const handleEditTodoSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo)
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map(todo => todo.id === id ? updatedTodo : todo);
    setIsEdit(false);
    setTodos(updatedItem);
  }



  return (
    <div className="App">
      <div style={header}>
        <h1 className='header-title'>TodoApp</h1>
      </div>

    <form onSubmit={handleAddTodo}>
      <div className="inputArea">
        <div className="ui fields">
            <div className="field">
              <label style={labelStyle}>Create a new todo</label>
              <input
                type="text"
                className='inputForm'
                value={todo}
                onChange={handleChange}
              />
              <button
                className="ui orange small button">Add</button>
            </div>
        </div>
      </div>
      </form>

      {
        isEdit ? (
        <form onSubmit={handleEditTodoSubmit}>
          <h4>
            タイトル名: <span>{ currentTodo.title }</span>を編集します
          </h4>
          <input
            name="editTodo"
            type="text"
            value={currentTodo.title}
            onChange={handleEditInputChange}
          />
          <button type="submit">更新する</button>
          <button onClick={() => setIsEdit(false)}>戻る</button>
        </form>
        )
        :
        (
          <div className='container'>
          <ul>
            {todos.map(todo =>
            (
              <li key={todo.id} className="todo-list">
                <span style={{marginRight: '20px'}}>ID:{ todo.id }</span>
                  <p style={{display: 'inline'}}>タイトル: { todo.title }</p>

                <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{marginLeft: '10px'}
                }>削除</button>

                <button
                  style={{marginLeft: '10px'}}
                  onClick={() => handleEditTodo(todo)}
                  >編集</button>
                </li>
            ))}
          </ul>
        </div>
        )
      }


    
    </div>
  );
}

export default App;
