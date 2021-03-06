import React from "react";


class listTodo extends React.Component{
    showEdit=(a)=>{
        document.querySelector(".edit").style.display="flex";
        document.querySelector(".edit .i-item").value=a.title;
        document.querySelector(".edit .des input").value=a.detail;
        document.querySelector(".edit .id").value=a.id;


    }
    
    showdel=(a)=>{
        let number=0;
        let id= document.getElementById(a+"del");
        let lb= document.getElementById(a+"lb");
        let checkbox= document.querySelectorAll(".value input");
        id.style.display=="block"?
           id.style.display="none" : id.style.display="block";
           id.style.display=="block"? lb.style.textDecoration="line-through":lb.style.textDecoration="none";
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].checked){
                number=1;
            }
        }
        number==1? document.getElementById("clearDone").style.backgroundColor="red": document.getElementById("clearDone").style.backgroundColor="pink"; 
     
    }
    showdetail=(a)=>{
        let id= document.getElementById(a+"detail");
        id.style.display=="block"?
            id.style.display="none": id.style.display="block"
          
       }
  

    render(){

     
        return(      
            <>
            
    <div class="item-list" id={this.props.id}>
<div class="title">
<div class="value">
<input onClick={()=>this.showdel(this.props.id)} type="checkbox" name="todo1" value={this.props.id}></input>
<label id={this.props.id+"lb"} for="todo1">{this.props.title}</label>
</div>
<div class="option">
<button onClick={()=>this.showEdit(this.props.item)}>
Edit
</button>
<button onClick={()=>this.showdetail(this.props.id)}>
Chi tiết
</button>
<button id={this.props.id+"del"}class="del">
delete
</button>
</div>
</div>
<div id={this.props.id+"detail"} class="items-1"><p><b>Detail:</b> {this.props.detail}</p></div>
</div>     

            </>     
        )
    }
}
export default listTodo;