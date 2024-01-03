const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask() {
    if(inputBox.value==='') {
        alert("You must write something");
    }
    else {
        let li=document.createElement("li");
        // text inside the input field (li)
        li.innerHTML=inputBox.value;
        // to display (li)
        listContainer.appendChild(li);

        // add cross option to remove from list 
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    // to clear the input field after adding text
    inputBox.value="";
    saveData();
}

// click function 
listContainer.addEventListener("click", function(e) {
    // it checks where we clicked 
    if(e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to store the tasks on browser 
// ie does not get vanish after reloading 
// to save whatever data is there in the list 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// to display the save data when we reload 
function showData() {
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();