var text=document.getElementById("text");
var list=document.getElementById("list");
function add(){
    if (text.value.trim() ==="") {
        alert("Please enter a task!");
        return;
    }
    console.log(text.value);
    var ele=document.createElement("li");
    ele.innerHTML=text.value+"<button onclick='del(event)' class='delete-btn'>Delete</button>";
    list.append(ele);
    }
    function del(event){
        event.target.parentElement.remove();
    }
