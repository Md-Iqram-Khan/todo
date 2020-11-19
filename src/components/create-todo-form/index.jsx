import React from "react";
import propTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class CreateTodoForm extends React.Component {
  state = {
    text: "",
    description: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.pereventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            placeholder="Do some code"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Describe Task</Label>
          <Input
            type="textarea"
            placeholder="Write short description about your task"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type="submit">Create Todo</Button>
        
      </Form>
    );
  }
}

CreateTodoForm.propTypes = {
  createTodo: propTypes.func.isRequired,
};

export default CreateTodoForm;
