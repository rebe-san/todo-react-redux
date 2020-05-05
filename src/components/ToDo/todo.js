import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteTodoAction} from '../../actions/actionsCreators'
import "./todo.css"

class ToDo extends Component{

      handleOnClick=()=>{
        this.props.deleteTodo(this.props.index);
      }
    render(){
      return(
         <section className="section-todo">
             <p>{this.props.todo}</p>
             <p onClick={this.handleOnClick}>
               x
             </p>
         </section>
      )
}

}




const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(index)=>{dispatch(deleteTodoAction(index))}
})
export default connect(null, mapDispatchToProps)(ToDo)



