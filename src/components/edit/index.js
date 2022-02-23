import React from 'react';
import './edit.css';
class edit extends React.Component{


    render(){

        return(
                <div class="edit">

<div class="e-item">
<p onclick="clickItem()">Enter Item</p>
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
    <button>SAVE</button> <button>Close</button>
    </div>
                </div>

        )
    }
}
export default edit;