const button = document.getElementById("btn");
const app = document.getElementById("layer1");

function createNote(content) {
    const deleteBtn = document.createElement("button");
    const noteContainer = document.createElement("div");
    const textarea = document.createElement("textarea");

    textarea.classList.add("note");
    deleteBtn.classList.add("deleteBtn");
    noteContainer.classList.add("note-container");

    deleteBtn.textContent = "delete";

    textarea.placeholder = "Empty Note";
    textarea.value = content;

    


    deleteBtn.addEventListener("click", () => noteContainer.remove());

    noteContainer.appendChild(deleteBtn);
    app.appendChild(noteContainer);
    noteContainer.appendChild(textarea);
    
}

button.addEventListener("click", () => createNote(""));
console.log("h");



/*function createNote(content){
    const dltBtn = document.createElement("div");
    dltBtn.classList.add("note-container");


    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    const btnBox = document.createElement("button");
    btnBox.textContent = "delete";
    btnBox.classList.add("deleteBtn");
    btnBox.addEventListener("click", () => element.remove());
    btnBox.addEventListener("click", () => btnBox.remove());


    app.appendChild(element);
    element.appendChild(btnBox);
    app.appendChild(btnBox);
}*/