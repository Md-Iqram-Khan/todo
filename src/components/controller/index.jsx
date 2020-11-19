import React from "react";
import propTypes from "prop-types";
import { Row, Col } from "reactstrap";

import SearchPanel from "./search-panel";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  view,
  changeView,
  clearSelected,
  clearCompleted,
  reset,
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FilterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ml-auto">
          <BulkController
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

Controller.propTypes = {
  term: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleForm: propTypes.func.isRequired,
  handleFilter: propTypes.func.isRequired,
  view: propTypes.string.isRequired,
  changeView: propTypes.func.isRequired,
  clearSelected: propTypes.func.isRequired,
  clearCompleted: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default Controller;
