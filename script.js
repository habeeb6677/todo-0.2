// Get the todo list ul element
const todoListUl = document.getElementById('todo-list-ul');

// Get the todo form element
const todoForm = document.getElementById('todo-form');

// Create an array to store the todo items
let todoItems = [];

// Add an event listener to the todo form
todoForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the todo input value
    const todoInputValue = document.getElementById('todo-input').value;

    // Create a new todo item object
    const todoItem = {
        text: todoInputValue,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
    };

    // Add the new todo item to the todo items array
    todoItems.push(todoItem);

    // Render the todo items
    renderTodoItems();

    // Reset the todo input value
    document.getElementById('todo-input').value = '';
});

// Function to render the todo items
function renderTodoItems() {
    // Clear the todo list ul element
    todoListUl.innerHTML = '';

    // Loop through the todo items array
    todoItems.forEach((todoItem, index) => {
        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        // Create the todo text element
        const todoText = document.createElement('p');
        todoText.classList.add('todo-text');
        todoText.textContent = todoItem.text;

        // Create the todo time element
        const todoTime = document.createElement('p');
        todoTime.classList.add('todo-time');
        todoTime.textContent = `Added on ${todoItem.date} at ${todoItem.time}`;

        // Create the delete button element
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            // Remove the todo item from the todo items array
            todoItems.splice(index, 1);

            // Render the todo items
            renderTodoItems();
        });

        // Create the edit button element
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            // Get the new todo text from the user
            const newTodoText = prompt('Enter new todo text:');

            // Update the todo item text
            todoItem.text = newTodoText;

            // Render the todo items
            renderTodoItems();
        });

        // Append the todo text, time, delete button, and edit button elements to the list item element
        listItem.appendChild(todoText);
        listItem.appendChild(todoTime);
        listItem.appendChild(deleteBtn);
        listItem.appendChild(editBtn);

        // Append the list item element to the todo list ul element
        todoListUl.appendChild(listItem);
    });
}