import React,{Component} from 'react';
import { connect } from 'react-redux';
import ToDo from '../ToDo/todo'
import "./todolist.css"

class TodoList extends Component{

render(){
    return(
        <div className="container-todos">
         {this.props.todos.map((todo,index)=>{
             return(<ToDo key={index} index={index} todo={todo}/>)
         })}   
       </div>
    )
}

}
const mapStateToProps=state=>({todos:state})
export default connect(mapStateToProps, null)(TodoList);

