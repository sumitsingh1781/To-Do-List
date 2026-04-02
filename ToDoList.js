
let input = document.getElementById("task");
let btn= document.getElementById("btn");
let list= document.getElementById("list");

btn.addEventListener("click",function()
{
    let task = input.value;
    if(task === "")
    {
        alert("Write Something");
    }

    let li = document.createElement("li");
    li.textContent=task;

    let delbtn = document.createElement("button");
    delbtn.textContent="Delete";

    delbtn.classList.add("delete-btn");

    delbtn.addEventListener("click",function()
{
    li.remove();
});
li.appendChild(delbtn);
list.appendChild(li);
input.value="";
});