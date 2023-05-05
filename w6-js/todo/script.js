let ul = document.querySelector("ul");
let body = document.querySelector("body");

if (localStorage.getItem("todos")) {
    displayData();
} else {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then((response) => response.json())
        .then((json) => localStorage.setItem("todos", JSON.stringify(json)))
        .then(() => displayData());
}

function displayData() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
    const completed = todos
        .filter((item) => item.completed == true)
        .map((item) => item.title)
        .sort();
    const uncompleted = todos
        .filter((item) => item.completed == false)
        .map((item) => item.title)
        .sort();

    console.log(completed);

    for (const todo of uncompleted) {
        const li = document.createElement("li");
        li.textContent = todo;
        ul.appendChild(li);
        li.addEventListener("click", () => handleClickEvent);
    }
    const count = document.createElement("p");
    count.textContent = `Uncompleted: ${uncompleted.length} / Completed: ${completed.length}`;
    body.appendChild(count);

    for (const todo of completed) {
        const li = document.createElement("li");
        li.textContent = todo;
        li.classList = "completed";
        ul.appendChild(li);
    }
}
