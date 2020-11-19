import React from "react";
import propTypes from "prop-types";
import { CustomInput, Button, Table } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th scope="row">
      <CustomInput
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </th>

    <th>{todo.time.toDateString()}</th>

    <th>{todo.text}</th>

    <th>
      <Button
        className="ml-auto"
        color={todo.isComplete ? "success" : "danger"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </th>
  </tr>
);

RowItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
  <Table className="mt-4">
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {todos.map((todo) => (
        <RowItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </tbody>
  </Table>
);

TableView.propTypes = {
  todos: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

export default TableView;
