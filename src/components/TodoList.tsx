import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../models/models";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setcompletedTodos,
}: Props) => {
  return (
    <section className="container">
      <Droppable droppableId="todoList">
        {(provided, snapshot) => (
          <section
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="todos__heading">Active Tasks</h2>
            {todos.map((todo, index) => (
              <TodoItem
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
      <Droppable droppableId="completedTodos">
        {(provided, snapshot) => (
          <section
            className={`todos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="todos__heading">Completed Tasks</h2>
            {completedTodos.map((todo, index) => (
              <TodoItem
                index={index}
                key={todo.id}
                todo={todo}
                todos={completedTodos}
                setTodos={setcompletedTodos}
              />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </section>
  );
};

export default TodoList;
