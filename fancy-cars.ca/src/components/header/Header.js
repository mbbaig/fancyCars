import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ logo, title }) => (
    <div className="header">
        <img src={logo} alt="logo" />
        <h3>{title}</h3>
    </div>
);

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;
