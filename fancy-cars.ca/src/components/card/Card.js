import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    imgUrl,
    name,
    make,
    model,
    availability,
}) =>
    (
        <div className="card">
            <img src={imgUrl} alt="car" />
            <p className="carName">{name}</p>
            <p><strong>{make}</strong></p>
            <p><strong>{model}</strong></p>
            <p>{availability}</p>
            {
                availability && availability === 'In Dealership' &&
                <button>Buy</button>
            }
        </div>
    );

Card.proptypes = {
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
};

export default Card;
