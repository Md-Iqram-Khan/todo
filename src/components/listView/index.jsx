import React from "react";
import propTypes from "prop-types";
import { ListGroup, ListGroupItem, CustomInput, Button } from "reactstrap";

//List item Component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-item-center mt-2">
      <CustomInput
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />

      <div className="mx-3">
        <h3>{todo.text}</h3>
        <p> {todo.time.toDateString()} </p>
      </div>

      <Button
        className="ml-auto"
        color={todo.isComplete ? "success" : "danger"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

export default ListView;
