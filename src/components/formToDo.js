import React,{useState} from "react";
import './formToDo.css';
import List from './listTodo';
import Edit from './eidt';
class Todo extends React.Component{
    
    state={
        list:[
            ]
 
        }
        addList=()=>{
            
            let it= document.querySelector('.e-item input');
            let des= document.querySelector('.des input');
            if (it.value==""){
                it.style.borderColor="red";
            }
            else{
            it.style.borderBottom="2px solid black";
            let newitem={
                id:Math.floor(Math.random() * 999999) + 1,
                title:it.value,
                detail:des.value
            }
            it.value="";
            des.value="";
            
            this.setState({
                list:[...this.state.list,newitem]
            })}
        }
    clearAll=()=>{
        document.getElementById("clearDone").style.backgroundColor="pink";
        let string = this.state.list;
        string = string.filter(item=>item.id=="");
        this.setState({
            list:string
    })
        }
    selectClear=()=>{
        let checkbox= document.querySelectorAll("input");
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].checked){
                let v = this.state.list.filter(item=>item.id!=checkbox[i].value);
                this.setState({
                    list:v
            })
        
        }
    }
    }    

    render(){

       
        return(
           
           <div class="container">
            <Edit/>
<h2>TO-DO LIST</h2>
<div class="e-item">
<p onclick="clickItem()">Enter Item</p>
<input onfocusout="unclick()"  onclick="clickItem()" class="i-item" ></input>
</div>
<div class="des">
<fieldset>
<legend onclick="clickDes()">Description</legend>
<input onfocusout="unclickDes()" onclick="clickDes()"  class="i-des"></input>
</fieldset>
<button onClick={()=>this.addList()}>ADD</button>
</div>
<div class="list">
<fieldset >
<legend>List To-do</legend>
{  
   
    this.state.list.map((item)=>
    <List title={item.title} detail={item.detail} id={item.id} show={this.showClear}/>
)}

</fieldset>
<div class="option-main">
<button style={{backgroundColor:"red"}} onClick={()=>this.clearAll()}>
CLEAR ALL
</button>
<button  onClick={()=>this.selectClear()} id="clearDone">
CLEAR DONE
</button>
</div>
</div>

 </div>
        )
    }
}
export default Todo;