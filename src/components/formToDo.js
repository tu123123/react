import React,{useState} from "react";
import './formToDo.css';
import List from './listTodo';
import Edit from './edit';
import './animation';
class Todo extends React.Component{
     title=()=>{
        document.querySelector('.e-item p').style.transform="translateY(0)";
        document.querySelector('.e-item p').style.transform="scale(0.7)";
        document.querySelector('.e-item p').style.color="gray";
    }
    untitle=()=>{
        if( document.querySelector('.e-item .i-item').value=="")
        {
            document.querySelector('.e-item p').style.transform="scale(1)";
            document.querySelector('.e-item p').style.transform="translateY(20px)";
            document.querySelector('.e-item p').style.color="black";
        }
       
    }
    clickDes=()=>{
       let a=document.querySelector('.formdes legend');
       let b=document.querySelector('.formdes fieldset');
       a.style.transform="translateY(0)";
       a.style.color='blue';
       b.style.border="2px solid blue"
    }
    unclickDes=()=>{
        if( document.querySelector('.formdes input').value=="")
        {
        let a=document.querySelector('.formdes legend');
       let b=document.querySelector('.formdes fieldset');
       a.style.transform="translateY(20px)";
       a.style.color='gray';
       b.style.border="2px solid rgb(237, 237, 238)"
    }}
    des=()=>{

    }
    state={
        list:[
           
            ]
        }
        callback=(a,b,c)=>{
            
            this.state.list.map(item=>{
                if(item.id==a){
                    this.setState({
                        list:[...this.state.list,item.detail=b,item.title=c]
                        
                    })
                   
            
        }}
       
        )
        this.setState({
            list:[...this.state.list]
            
        })
            document.querySelector(".edit").style.display="none";
           
    
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
            this.unclickDes();
            this.untitle();
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
        let v = this.state.list
        let checkbox= document.querySelectorAll("input");
        let checkboxdl= document.querySelectorAll(".list .del");
        let checkboxlb= document.querySelectorAll(".list label");
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].checked){
                 v = v.filter(item=>item.id!=checkbox[i].value);
                
        }
    }
    this.setState({
        list:v
})
for(let i=0;i<checkbox.length;i++){
   checkbox[i].checked=false;
       
}
for(let i=0;i<checkboxlb.length;i++){
    checkboxlb[i].style.textDecoration="none";
    checkboxdl[i].style.display="none";
        
 }
    }    

    render(){

       
        return(
           
           <div class="container">
           
<h2>TO-DO LIST</h2>
<div class="e-item form">
<p >Enter Item</p>
<input onBlur={()=>this.untitle()}  onClick={()=>this.title()} class="i-item" ></input>
</div>
<div class="des formdes">
<fieldset>
<legend onclick="clickDes()">Description</legend>
<input  onBlur={()=>this.unclickDes()} onClick={()=>this.clickDes()}  class="i-des"></input>
</fieldset>
<button onClick={()=>this.addList()}>ADD</button>
</div>
<div class="list">
<fieldset >
<legend>List To-do</legend>
{  
   
    this.state.list.map((item)=>
    <List title={item.title} item={item} detail={item.detail} id={item.id} show={this.showClear}/>
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
<Edit callback={this.callback}/>
 </div>
        )
    }
}
export default Todo;