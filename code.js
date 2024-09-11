const inputBox = document.getElementById("input-box");
const listcont = document.getElementById("list-cont");

function addTask(){
    if (inputBox.value === ''){
         alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "" ;
    savedata();
    
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


function savedata(){
    localStorage.setItem("data", listcont.innerHTML);
}
function showlist() {
    listcont.innerHTML = localStorage.getItem("data");

}

showlist();
