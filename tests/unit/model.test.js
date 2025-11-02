const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        // Then, assert that the service's todos array has a length of 1.
        // Assert that the text of the first todo matches the input text.
        text = 'My new todo';

        service.addTodo('My new todo');

        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toMatch(text);
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        // Then, get its ID and call the toggleTodoComplete method.
        // Assert that the 'completed' property of that todo is now true.
        // Call toggleTodoComplete again and assert that it's false.
         service.addTodo('My new todo 1');
        id = service.getTodos().find(t => t.text === "My new todo 1").id;
        idx = service.getTodos().findIndex(t => t.text === "My new todo 1");

        service.toggleTodoComplete(id);
        expect(service.todos[idx].completed).toBe(true);
        service.toggleTodoComplete(id);
        expect(service.todos[idx].completed).toBe(false);
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        // Get its ID and call the removeTodo method.
        // Assert that the service's todos array is now empty (length of 0).
        service.addTodo('My new todo 2');
        id = service.getTodos().find(t => t.text === "My new todo 2").id;
        service.removeTodo(id);
        expect(service.todos.length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        // Assert that the todos array still has a length of 0.
        let text = "";
        service.addTodo(text);
        expect(service.todos.length).toBe(0);
    });
});
