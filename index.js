const button = document.getElementById("btn");
const app = document.getElementById("layer1")

function createNote(content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    app.appendChild(element);
}

button.addEventListener("click", () => createNote(""));
console.log("h");