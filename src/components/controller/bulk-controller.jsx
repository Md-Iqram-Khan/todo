import React from 'react';
import propTypes from 'prop-types';
import { Button, ButtonGroup} from 'reactstrap'

const  BulkController = ( { clearSelected,  clearCompleted, reset }) => (
    <ButtonGroup>
            <Button className='mr-1' color="info" onClick={ clearSelected}>Clear Selected</Button>
            <Button className='mr-1' color="info"  onClick={ clearCompleted}>Clear Completed</Button>
            <Button color="info"  onClick={ reset}>Reset</Button>
    </ButtonGroup>
) 

BulkController.propTypes = {
    clearSelected: propTypes.func.isRequired,
    clearCompleted: propTypes.func.isRequired,
    reset: propTypes.func.isRequired
}

export default BulkController;


