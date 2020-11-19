import React from 'react';
import propTypes from 'prop-types';
import { Button, ButtonGroup} from 'reactstrap'

const  FilterController = ( { handleFilter }) => (
    <ButtonGroup>
            <Button color='info' className='mr-1' onClick={ () => handleFilter('all')}>All</Button>
            <Button color='info' className='mr-1' onClick={ () => handleFilter('running')}>Running</Button>
            <Button color='info' onClick={ () => handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
) 

FilterController.propTypes = {
    handleFilter: propTypes.func.isRequired
}

export default FilterController


