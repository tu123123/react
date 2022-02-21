import React from "react";


class listTodo extends React.Component{
  
    render(){

       
        return(      
<div class="list">
<fieldset >
<legend>List To-do</legend>
<div class="item-list" id="l-1">
<div class="title">
<div class="value" id="v-1">
<input onchange="del(this,'l-1','v-1')" type="checkbox" name="todo1" value="Read React book"></input>
<label for="todo1">Read React book</label>
</div>
<div class="option">
<button>
Edit
</button>
<button onclick="show('l-1')">
Chi tiết
</button>
<button class="del">
delete
</button>
</div>
</div>
<div class="items-1"><p>Detail:ok phết</p></div>
</div>
<div class="item-list" id="l-2">
<div class="title">
<div class="value" id="v-2">
<input onchange="del(this,'l-2','v-2')" type="checkbox" name="todo1" value="Read React book"></input>
<label for="todo1">ăn chơi</label>
</div>
<div class="option">
<button>
Edit
</button>
<button onclick="show('l-2')">
Chi tiết
</button>
<button class="del">
delete
</button>
</div>
</div>
<div class="items-1"><p>Detail:ok à</p></div>
</div>


</fieldset>
<div class="option-main">
<button>
CLEAR ALL
</button>
<button>
CLEAR DONE
</button>
</div>
</div>
            
        )
    }
}
export default listTodo;