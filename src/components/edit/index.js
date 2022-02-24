import React from 'react';
import './edit.css';
class edit extends React.Component{
    save=()=>{
        this.props.callback(document.querySelector(".id").value,document.querySelector(".edit .i-des").value,document.querySelector(".edit .i-item").value);
    }
  close=()=>{
      document.querySelector(".edit").style.display="none";
  }
    render(){

        return(
                <div class="edit">

<div class="e-item">
<p onclick="clickItem()">Enter Item</p>
<input class="id" hidden></input>
<input onfocusout="unclick()"  onclick="clickItem()" class="i-item" ></input>
</div>
<div class="des">
<fieldset>
<legend onclick="clickDes()">Description</legend>
<input onfocusout="unclickDes()" onclick="clickDes()"  class="i-des"></input>
</fieldset>
<br/>
</div>
<div class="button">
    <button onClick={()=>this.save()}>SAVE</button> <button onClick={()=>this.close()}>Close</button>
    </div>
                </div>

        )
    }
}
export default edit;