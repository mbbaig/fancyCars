import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './CardList.css';

const CardList = ({ cars }) => (
    <div className="CardList">
        {
            cars.map(car =>
                <Card
                    key={car.id}
                    {...car}
                />)
        }
    </div>
);

CardList.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        make: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        year: PropTypes.number,
        availability: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default CardList;
