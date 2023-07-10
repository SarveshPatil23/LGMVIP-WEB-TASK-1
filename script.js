const inputBox = document.getElementById("INPUT BOX")
const listContainer = document.getElementById("list-container")  

// function to add a task to the list when we click "ADD" button
function addTask(){
    if(inputBox.value==''){
        alert("Don't leave the field empty!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span)

    }
    inputBox.value ="";
    saveData();
}

// function to mark a task as "checked" or to delete that task for the list
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function to save the data after closing of the webpage so that it can be accessed later 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// function to show the added task
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();