var submitButton = document.getElementById("btnSubmit");
var input = document.getElementById("userInput");
var ul = document.getElementById("extendableList");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    //Add list item, add listener to item allowing strikethrough upon completion
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    li.addEventListener("click", function() {toggleStrikethrough(li)} );

    //Add delete button next to item
    var btnDelete = document.createElement("button");
    btnDelete.appendChild(document.createTextNode("delete"));
    btnDelete.className = "delete";
    btnDelete.addEventListener("click", function() {deleteListItem(btnDelete)} );
    li.appendChild(btnDelete);

}

function addToListOnClick() {
    console.log("Click registered");
    if(inputLength() > 0){
        createListElement();
    }
}

function addToListOnKeypress(event) {
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

function toggleStrikethrough(element) {
    element.classList.toggle("itemComplete");
    console.log(element);
}

function deleteListItem(btnDelete){
    var listItem = btnDelete.parentNode;
    ul.removeChild(listItem); 
}

submitButton.addEventListener("click", addToListOnClick) 
    
input.addEventListener("keypress", addToListOnKeypress) 

