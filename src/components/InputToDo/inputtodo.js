import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addTodoAction} from '../../actions/actionsCreators'
import "./inputtodo.css"


class Input extends Component{
    state={
      input:''
    }

    handleOnChange= e =>{
        e.preventDefault()
        this.setState({
            input:e.target.value
        })
    }

    handleOnClick= () =>{
        this.setState({input:''})
        this.props.addTodo(this.state.input);
    }
    render(){
        return(
            <section className="input-todo">  
            <label> Write your note:</label>
            <input onChange={this.handleOnChange}
            value={this.state.input}/>
            <button className="input-button" onClick={this.handleOnClick}>Add</button>
            </section>
        )
    }
}



const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>{dispatch(addTodoAction(todo))}
})
export default connect(null, mapDispatchToProps)(Input)

