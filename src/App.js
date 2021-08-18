import './App.css';
import React ,{useEffect}  from 'react'
import Add from './Add/Add'
import TodoList from './Todo/TodoList' 
import Context from './context'
import Loader from './Loader'

function App() {
  const[todos , setTodos] = React.useState([])
  const [loading , setLoading] = React.useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        },2000)
      })
  },[])



function toggleTodo(id){
  setTodos(
  todos.map(todo=>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo
  })
  )
}
function removeTodo(id) {
  setTodos(
  todos.map(todo=>{
    if(todo.id === id){
      todo.completed = todo.completed
    }
  })
  )
  
}/*
function addTodo(title,description,price){
  setTodos(
    todos.concat([{
      title ,
      description,
      price,
      id: Date.now() ,
      completed: false
      }
    ])
  )

}*/
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Product List</h2>
        <Add />
      </header>
      <section className="App-body">
          <Context.Provider value={{removeTodo}}>  
            <div className = ' wrapper'>
                {loading &&  <Loader></Loader>}
                {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) 
                :loading ? null : (<p>no todos</p>)} 
            </div>
        </Context.Provider>
      </section>
    </div>
  );
}

export default App;
