import React from 'react'
import PropTypes from 'prop-types'
import Todoitem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none' ,
        margin:  '50px',
        padding: '0',
        display: 'flex' ,
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}

function TodoList(props) {
   
    return (
        <ul style={ styles.ul}>
            {props.todos.map((todo , index )=>{
                return <Todoitem 
                todo={todo} 
                key={todo.id} 
                index={index} 
                onChange ={props.onToggle}/>
            })}
        </ul>     
    )
}

TodoList.propTypes = {
    todos : PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange : PropTypes.func.isRequired
}

export default TodoList

