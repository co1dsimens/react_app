import React  from 'react'
import PropTypes from 'prop-types'/*
import Context from '../context'*/

const styles = {
    li:{
        display: 'flex ',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #cdcdd1',
        borderRadius: '5px',
        width: '25%',
        color: '#cdcdd1',
        margin: '10px'
    },
    input:{
        marginRight: '1rem',
        position: 'relative',
        top: '-30%'
    },
    span:{
        padding: '5px',
        display: 'block',
        width: '100%',
        height: 'auto'

    }
}

function TodoItem({ todo , index , onChange }) {
  /* const {removeTodo} = useContext(Context)*/
    const classes =[]
    if(todo.completed){
        classes.push('done')
    }
    return(
        <li style= {styles.li}>
            <input type ="checkbox" style= {styles.input} onChange = {() => onChange(todo.id)} />
            <div  style={{width:'100%'}}>
                <span className ={classes.join(' ')}style={styles.span}>{ todo.title } </span>
                <span className ={classes.join(' ')}style={styles.span}>{ todo.description } </span>
                <span className ={classes.join(' ')}style={styles.span}>{ todo.price } </span>
            </div>
        </li>
    )

}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    index : PropTypes.number,
    onChange: PropTypes.func.isRequired  
}


export default TodoItem