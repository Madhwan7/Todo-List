const input = document.getElementById("todoInput");

// Add task when Enter key is pressed
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {

    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="left">
            <input type="checkbox">
            <span>${text}</span>
        </div>

        <button class="delete">Delete</button>
    `;

    const checkbox = li.querySelector("input");
    const span = li.querySelector("span");

    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });

    document.getElementById("todoList").appendChild(li);

    input.value = "";
    input.focus();
}