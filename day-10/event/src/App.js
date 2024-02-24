import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const initialTodos = [
  { id: 'todo-1', content: 'Learn React' },
  { id: 'todo-2', content: 'Build a to-do list app' },
  { id: 'todo-3', content: 'Implement drag-and-drop functionality' },
];

const initialContainers = {
  container1: [],
  container2: [],
  container3: [],
};

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [containers, setContainers] = useState(initialContainers);
  const [newTodoInput, setNewTodoInput] = useState('');

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const sourceContainer = containers[source.droppableId];
    const destinationContainer = containers[destination.droppableId];
    const [removed] = sourceContainer.splice(source.index, 1);
    destinationContainer.splice(destination.index, 0, removed);

    setContainers({ ...containers, [source.droppableId]: sourceContainer, [destination.droppableId]: destinationContainer });
  };

  const handleInputChange = (e) => {
    setNewTodoInput(e.target.value);
  };

  const addTodo = () => {
    if (newTodoInput.trim() !== '') {
      const id = `todo-${todos.length + 1}`;
      setTodos([...todos, { id, content: newTodoInput }]);
      setContainers({ ...containers, container1: [...containers.container1, id] });
      setNewTodoInput('');
    }
  };

  return (
    <div className="App">
      <h1>Draggable To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTodoInput}
          onChange={handleInputChange}
          placeholder="Enter a new to-do item"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container">
          {[1, 2, 3].map((num) => (
            <Droppable droppableId={`container${num}`} key={`container${num}`}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="droppable">
                  {containers[`container${num}`].map((id, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="draggable"
                        >
                          {/* Render each to-do item in its own row */}
                          <div key={id}>
                            {todos.find((todo) => todo.id === id)?.content}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;
