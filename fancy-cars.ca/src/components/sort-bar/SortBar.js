import React from 'react';
import PropTypes from 'prop-types';
import './SortBar.css';

const SortBar = ({
    labelSort,
    sortAction,
}) => (
    <div className="bar">
        <span>{labelSort}</span>
        <select onChange={sortAction}>
            <option selected disabled hidden>Please Select</option>
            <option>Name</option>
            <option>In Dealership</option>
            <option>Out of Stock</option>
            <option>Unavailable</option>
        </select>
    </div>
);

SortBar.propTypes = {
    labelSort: PropTypes.string.isRequired,
    sortAction: PropTypes.func.isRequired,
};

export default SortBar;
