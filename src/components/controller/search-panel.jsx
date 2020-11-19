import React from "react";
import propTypes from "prop-types";
import { Input, Button } from "reactstrap";

const SearchPanel = ({ term, handleSearch, toggleForm }) => (
  <div className="d-flex mb-2">
    <Input
      placeholder="Enter Search Term"
      className="mr-3"
      value={term}
      onChange={(e) =>  handleSearch(e.target.value)}
    />

    <Button color="success" onClick={toggleForm}>
      New
    </Button>

  </div>
);

SearchPanel.propTypes = {
  term: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleForm: propTypes.func.isRequired
};

export default SearchPanel;
