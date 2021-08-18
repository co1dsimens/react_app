import React ,{useContext} from 'react'
import './Add.css'
import Context from '../context'

function Add({ todo }) {
    const {removeTodo} = useContext(Context,Context),
     state ={
        isOpen: false
    }

    return(
        <React.Fragment>
            <div>
                <button className="button efect" onClick ={() => this.setState ({isOpen:true})}>Add</button>
                <button className="button efect" onClick={removeTodo.bind(null, todo.id )}>Mass Delete</button>

                {this.state.isOpen && (<div className='Add'>
                    <div className='modal_body'>
                        <h1>Welcom</h1>
                        <p>Lorem Ipsum is a"fish" text often used in print and web design. Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century. At that time, an unnamed printer created a large collection.</p>
                        <button className="button efect" onClick ={() => this.setState ({isOpen:false})}>Close</button>
                    </div>
                </div>  )}
            </div>
        </React.Fragment>
    )
}
export default Add