import React from 'react';
import PropTypes from 'prop-types';
import { SortFilters } from '../../utils/constants';
import './SortBar.css';

const SortBar = ({
    labelSort,
    filterAction,
    filter,
}) => (
    <div className="bar">
        <span>{labelSort}</span>
        <select onChange={filterAction}>
            <option selected disabled hidden>Please Select</option>
            <option value={SortFilters.NAME}>Name</option>
            <option value={SortFilters.IN_DEALERSHIP}>In Dealership</option>
            <option value={SortFilters.OUT_OF_STOCK}>Out of Stock</option>
            <option value={SortFilters.UNAVAILABLE}>Unavailable</option>
        </select>
    </div>
);

SortBar.propTypes = {
    labelSort: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
};

export default SortBar;
