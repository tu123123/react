import React from "react";
import './formToDo.css';
import List from './listTodo';
class Todo extends React.Component{
    state={
        ok:{
            ok2:"ăn cơm"
        }
    }
    thongbao=(e)=>{
       this.setState({
           ok:{
               ok2:e.target.value
           }
       })
    }
    render(){

       
        return(
            
           <div class="container">
<h2>TO-DO LIST</h2>
<div class="e-item">
<p onclick="clickItem()">Enter Item</p>
<input onfocusout="unclick()" onclick="clickItem()" class="i-item" ></input>
</div>
<div class="des">
<fieldset>
<legend onclick="clickDes()">Description</legend>
<input onfocusout="unclickDes()" onclick="clickDes()"  class="i-des"></input>
</fieldset>
<button>ADD</button>
</div>
<List/>
            </div>
        )
    }
}
export default Todo;